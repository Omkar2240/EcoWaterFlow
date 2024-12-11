const loadHome = async (req,res) => {
    try {
        res.render('home');
    } catch (error) {
        console.log(error.message);
        
    }
}

const loadResearch = async (req,res) => {
    try {
        res.render('research');
    } catch (error) {
        console.log(error.message);
        
    }
}

const loadArticles = async (req,res) => {
    try {
        res.render('articles');
    } catch (error) {
        console.log(error.message);
        
    }
}

const loadSearch = async (req,res) => {
    try {
        res.render('wikiSearch');
    } catch (error) {
        console.log(error.message);
        
    }
}

const loadvideo = async (req,res) => {
    try {
        res.render('videoSection');
    } catch (error) {
        console.log(error.message);
        
    }
}
const loadquiz = async (req,res) => {
    try {
        res.render('quiz');
    } catch (error) {
        console.log(error.message);
        
    }
}
const loadCalculator = async (req,res) => {
    try {
        res.render('calculator');
    } catch (error) {
        console.log(error.message);
        
    }
}
const loadDiscussion = async (req,res) => {
    try {
        res.render('discussion');
    } catch (error) {
        console.log(error.message);
        
    }
}
<<<<<<< HEAD
const loadProduct = async (req,res) => {
    try {
        res.render('product');
=======
const loadHigh = async (req,res) => {
    try {
        res.render('high');
>>>>>>> 246aecc97419b51fe37d29a9bbff79b2869466b7
    } catch (error) {
        console.log(error.message);
        
    }
}
<<<<<<< HEAD

=======
>>>>>>> 246aecc97419b51fe37d29a9bbff79b2869466b7


module.exports = {
    loadHome,
    loadResearch,
    loadArticles,
    loadSearch,
    loadvideo,
    loadquiz,
    loadCalculator,
    loadDiscussion,
<<<<<<< HEAD
    loadProduct
=======
    loadHigh
>>>>>>> 246aecc97419b51fe37d29a9bbff79b2869466b7
}