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
        res.render('agro');
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
const loadCertificate = async (req,res) => {
    try {
        res.render('certificate');
    } catch (error) {
        console.log(error.message);
        
    }
}
const loadCamp = async (req,res) => {
    try {
        res.render('c');
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
    loadCertificate
    
=======
    loadCertificate,
    loadCamp
>>>>>>> d14712cbf489acaabf78f9c252f87bf5a976768c
}