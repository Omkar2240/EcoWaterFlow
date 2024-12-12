const express = require('express'); 
const user_route = express();

const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));

const session = require('express-session');

const config = require('../config/config');

user_route.use(session({secret:config.sessionSecret,
    resave:true,
    saveUninitialized:true
}));

user_route.set('view engine', 'ejs');
user_route.set('views','./views');

const path = require('path');
user_route.use(express.static(path.join(__dirname, 'public')));

const userController = require('../controllers/userController');
const adminLoginAuth = require('../middleware/adminLoginAuth');

// new account 
user_route.get('/create-account',userController.loadCreateAccount);
user_route.post('/create-account',userController.createAccountSetup);
user_route.post('/',userController.createComplaint);

// login
user_route.get('/login',adminLoginAuth.isLogout,userController.loadLogin);
user_route.post('/login',userController.verifyLogin);

user_route.get('/logout',adminLoginAuth.isLogin,userController.logout);

user_route.get('/post',userController.post);


module.exports = user_route;