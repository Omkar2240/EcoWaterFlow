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
const loadAgro = async (req,res) => {
    try {
        res.render('Agro');
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

const loadProduct = async (req,res) => {
    try {
        res.render('product');
    } catch (error) {
        console.log(error.message);
        
    }
}
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
const loadCase = async (req,res) => {
    try {
        res.render('caseStudies');
    } catch (error) {
        console.log(error.message);
        
    }
}
<<<<<<< HEAD
const loadCamp = async (req,res) => {
    try {
        res.render('c');
=======
const loadCertificate = async (req,res) => {
    try {
        res.render('certificate');
>>>>>>> 3f5ea5a0d3f053d647790f01e122c681e8bc19c4
    } catch (error) {
        console.log(error.message);
        
    }
}






    
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
    loadHigh,
    loadMedium,
    loadLow,
    loadNews,
    loadRecycle,
    loadAgro,
    loadCase,
<<<<<<< HEAD
    loadCamp
=======
    loadCertificate
>>>>>>> 3f5ea5a0d3f053d647790f01e122c681e8bc19c4
}