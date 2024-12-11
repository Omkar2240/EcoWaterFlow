const BlogSettings = require('../models/blogSettingModel');
const User = require('../models/userModel');
const Post = require('../models/postModel');
const bcrypt = require('bcrypt');

const securePassword = async (password) => {
    try {
        
        const passwordHash = await bcrypt.hash(password,10);

        return passwordHash;

    } catch (error) {
        console.log(error.message);
        
    }
}



const blogSetup = async(req,res) => {

    try {
        
       const blogSetting = await BlogSettings.find({});

       if (blogSetting.length > 0) {
         res.redirect('/login');
       }
        else {
         res.render('blogSetup')
       }
    } catch (error) {
        console.log(error.message);
        
    }

}

const blogSetupSave = async(req,res) => {
    try {

        const blog_title = req.body.blog_title;
        const date = req.body.date;
        const blog_image = req.file.filename;
        const description = req.body.description;
        const email = req.body.email;
        const name = req.body.name;
        const password = await securePassword(req.body.password);

        const blogSetting = new BlogSettings({
            blog_title:blog_title,
            date:date,
            blog_image:blog_image,
            description:description
        });

        await blogSetting.save();

       const user = User({
            name:name,
            email:email,
            password:password,
            is_admin:1
        });

       const userData = await user.save();
       if(userData){
         res.redirect('/login');
       }
       else{                         //if network error
         res.render('blogSetup',{message:'Blog not setup properly!'});
       }
        
    } catch (error) {
        console.log(error.message);
        
    }
}

const dashboard = async (req,res) => {
    try {
        res.render('AdminDashboard/index')
    } catch (error) {
        console.log(error.message);
        
    }
}

const loadPostDashboard = async (req,res) => {
    try {
        res.render('AdminDashboard/postDashboard');
    } catch (error) {
        console.log(error.message);
        
    }
}

const addPost = async (req,res) => {
    try {
        
        const post = new Post({
            title:req.body.title,
            content:req.body.content,
            author:req.body.author,
            date:req.body.date
        });

        const postData = await post.save();

        res.render('AdminDashboard/postDashboard',{message:'Post added Successfully!'})

    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = {
    blogSetup,
    blogSetupSave,
    dashboard,
    loadPostDashboard,
    addPost
}