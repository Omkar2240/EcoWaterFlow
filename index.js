
// DataBase Connection
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Eco-WaterFlow");

const express = require('express');
const app = express();

const session = require('express-session');
// Set up session middleware
app.use(session({
    secret: 'secret-Baat-Hai-Kisi-ko-Batana-Mat',  // Replace with your secret key
    resave: false,
    saveUninitialized: true
}));
app.get('/', (req, res) => {
    const user = req.session.user_id;  // Access the user from session
    res.render('home', { user });   // Pass the user data to the home.ejs
});
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use((req, res, next) => {
    res.locals.user = req.session.user;  // Set user data globally for all views
    next();
});

// const isblog = require("./middleware/isBlog");
// app.use(isblog.isBlog);

// for admin routes
const adminRoute = require("./routes/adminRoutes");
app.use('/',adminRoute);


// for user routes
const userRoute = require("./routes/userRoutes");
app.use('/',userRoute);

// for home routes

const homeRoute = require("./routes/homeRoutes");
app.use('/', homeRoute);

// for tech routes

// const techRoute = require("./routes/techRoutes");
// app.use('/', techRoute);


app.listen(3000, function(){
    console.log(`Server is running at http://localhost:3000`); 
})




// Wikis - create, edit ande delete information by users


const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Use bodyParser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Passport Local Strategy
passport.use(new LocalStrategy(
    async (email, password, done) => {
      try {
        const user = await user.findOne({ email });
        if (!user) return done(null, false, { message: 'No user with that email' });
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return done(null, false, { message: 'Incorrect password' });
  
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  ));
  
  passport.serializeUser((user, done) => done(null, user_id));
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
  
  const pageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Link to User model
  });
  const Page = mongoose.model('Page', pageSchema);
  module.exports = Page;

  // middleware 
  const authenticateUser = (req, res, next) => {
    if (!req.session.user_id) {
      return res.status(401).send('You must log in to perform this action.');
    }
    next();
  };
  
// Route to create a content
  app.post('/save', async (req, res) => {
    const { title, content } = req.body;  // Get title and content from the request body
  
    // Validate that title and content are provided
    if (!title || !content) {
      return res.status(400).send('Title and content are required.');
    }
      // Check if the user is authenticated
      if (!req.session || !req.session.user_id) {
        return res.status(401).send('You must be logged in to create a page.');
      }
  
    try {
      // Create a new page with title and content
      const page = new Page({
        title,   // Set the title field
        content,
        userId: req.session.user_id, // Set the content field
      });
  
      // Save the page (no slug generation, just save the page with the _id)
      await page.save();
  
      // Redirect to the newly created page using the page's _id
      res.redirect(`/page/${page._id}`); // Use _id instead of slug
    } catch (err) {
      console.error('Error saving the page:', err);
      res.status(500).send('Error saving the page.');
    }
  });
   
  app.get('/page/:id', async (req, res) => {
    const pageId = req.params.id;  // Get the page _id from the URL parameters
    const userId = req.session.user_id;
    try {
      const page = await Page.findById(pageId);  // Find the page by _id
  
      if (!page) {
        return res.status(404).send('Page not found');
      }
  
      res.render('page', { title: page.title, content: page.content, userId , page});   // Render the page with the fetched data
    } catch (err) {
      console.error('Error fetching the page:', err);
      res.status(500).send('Error fetching the page.');
    }
  });
  
  app.get('/content', async (req, res) => {
    try {
      const pages = await Page.find();  // Find all pages
  
      res.render('tech', { pages });  // Pass the pages to the index view
    } catch (err) {
      console.error('Error fetching pages:', err);
      res.status(500).send('Error fetching pages.');
    }
  });

  // Route to edit the post
  app.get('/page/:id/edit', authenticateUser, async (req, res) => {
    const pageId = req.params.id;
    const userId = req.session.user_id; // Logged-in user's ID
  
    try {
      const page = await Page.findById(pageId);
  
      if (!page || page.userId.toString() !== userId) {
        return res.status(403).send('You do not have permission to edit this post.');
      }
  
      // Render the edit form with Quill pre-loaded with the page content
      res.render('edit', { title: page.title, content: page.content, pageId });
    } catch (err) {
      console.error('Error fetching the page for editing:', err);
      res.status(500).send('Error fetching the page for editing.');
    }
  });
  
  app.post('/page/:id/edit', authenticateUser, async (req, res) => {
    const pageId = req.params.id;
    const userId = req.session.user_id;
    const { title, content } = req.body;
  
    try {
      const page = await Page.findById(pageId);
  
      if (!page || page.userId.toString() !== userId) {
        return res.status(403).send('You do not have permission to edit this post.');
      }
  
      // Update the page's title and content
      page.title = title;
      page.content = content;
      await page.save();
  
      res.redirect(`/page/${pageId}`);
    } catch (err) {
      console.error('Error saving the updated page:', err);
      res.status(500).send('Error saving the updated page.');
    }
  });

  // Route to delete the post
  app.post('/page/:id/delete', authenticateUser, async (req, res) => {
    const pageId = req.params.id;
    const userId = req.session.user_id;
  
    try {
      const page = await Page.findById(pageId);
  
      if (!page || page.userId.toString() !== userId) {
        return res.status(403).send('You do not have permission to delete this post.');
      }
  
      // Delete the page
    await Page.findByIdAndDelete(req.params.id);
    
      res.redirect('/');
    } catch (err) {
      console.error('Error deleting the page:', err);
      res.status(500).send('Error deleting the page.');
    }
  });
  
  

  // discussion

  const server = require('http').createServer(app);
  const { Server } = require('socket.io');
  const io = new Server(server);
app.use(express.static(path.join(__dirname+"/public")));

io.on('connection', function(socket) {
    socket.on('newuser', function(username) {
        socket.broadcast.emit('update', username + ' joined the conversation');
    });

    socket.on('exituser', function(username) {
        socket.broadcast.emit('update', username + ' left the conversation');
    });

    socket.on('chat', function(message) {
        socket.broadcast.emit('chat', message);
    });
});


//complaint box 

// const complaintRoutes = require('./routes/complaints');
// app.use('/api/complaints', complaintRoutes);
