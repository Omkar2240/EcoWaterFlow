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
const loadProduct = async (req,res) => {
    try {
        res.render('product');
    }catch(err){
        console.log(err);
    }
}
const loadHigh = async (req,res) => {
    try {
        res.render('high');
>>>>>>> 5bb7945cbe34cd4f0c289abead882bab1a918c2d
    } catch (error) {
        console.log(error.message);
        
    }
}
<<<<<<< HEAD
const loadHigh = async (req,res) => {
    try {
        res.render('high');

    } catch (error) {
        console.log(error.message);
        
    }
}
const loadMedium = async (req,res) => {
    try {
        res.render('medium');

    } catch (error) {
        console.log(error.message);
        
    }
}
const loadLow = async (req,res) => {
    try {
        res.render('low');

    } catch (error) {
        console.log(error.message);
        
    }
}

const loadNews = async (req,res) => {
    try {
        res.render('news');
    } catch (error) {
        console.log(error.message);
        
    }
}

const loadRecycle = async (req,res) => {
    try {
        res.render('recycle');
    } catch (error) {
        console.log(error.message);
        
    }
}



=======
>>>>>>> 5bb7945cbe34cd4f0c289abead882bab1a918c2d


    
module.exports = {
    loadHome,
    loadResearch,
    loadArticles,
    loadSearch,
    loadvideo,
    loadquiz,
    loadCalculator,
    loadDiscussion,
    loadProduct,
<<<<<<< HEAD
    loadHigh,
    loadMedium,
    loadLow,
    loadNews,
    loadRecycle
=======
    loadHigh
>>>>>>> 5bb7945cbe34cd4f0c289abead882bab1a918c2d
}