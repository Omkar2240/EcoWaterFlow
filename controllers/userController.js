const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const loadLogin = async (req,res) => {
    try {

        res.render('login');

    } catch (error) {

        console.log(error.message);
        
    }
}

const verifyLogin = async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userData = await User.findOne({email:email});

        if (userData) {            
           const passwordMatch = await bcrypt.compare(password,userData.password);
           if (passwordMatch) {
            req.session.user_id = userData._id;
            req.session.is_admin = userData.is_admin;
             if(userData.is_admin == 1){
                res.redirect('/dashboard');
            } else{
                res.redirect('/');
             }
           } else {
               res.render('login',{message:"Email and Password is incorrect!"});
            }
            
        } else {
            res.render('login',{message:"Email and Password is incorrect!"});
        }
        
    } catch (error) {
        
        console.log(error.message);
        
    }
}

const loadCreateAccount = async (req,res) => {
    try {

        res.render('create-account');

    } catch (error) {

        console.log(error.message);
        
    }
}

const createAccountSetup = async(req,res) => {
    try {
        const { email, password } = req.body;

        const user = new User({ email, password });
        await user.save();
        req.session.user_id = user._id; // Save user ID in session
        res.redirect('/');
    } catch (error) {
        res.status(500).send("Error creating account: " + error.message);
    }
}


const post = async (req,res) => {
    if (!req.session.user_id) {
        return res.redirect('/login');  // Redirect to login if user is not logged in
    }
    res.render('post', { profile: req.session.user_id });  // Pass user object to profile.ejs
}

const logout = async (req,res) => {
    try {
        req.session.destroy();
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = {
    loadLogin, 
    loadCreateAccount,
    createAccountSetup,
    verifyLogin,
    post,
    logout
}