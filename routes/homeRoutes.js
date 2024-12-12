const express = require('express'); 
const home_route = express();

home_route.set('view engine', 'ejs');
home_route.set('views', './views');

home_route.use(express.static('public'));

const homeController = require('../controllers/homeController');



home_route.get('/', homeController.loadHome);
home_route.get('/research', homeController.loadResearch);
home_route.get('/articles', homeController.loadArticles);
home_route.get('/search', homeController.loadSearch);
home_route.get('/video', homeController.loadvideo);
home_route.get('/quiz', homeController.loadquiz);
home_route.get('/calculator', homeController.loadCalculator);
home_route.get('/agro', homeController.loadAgro);
home_route.get('/discussion', homeController.loadDiscussion);

home_route.get('/products', homeController.loadProduct);

home_route.get('/high', homeController.loadHigh);
home_route.get('/medium', homeController.loadMedium);
home_route.get('/low', homeController.loadLow);
home_route.get('/news', homeController.loadNews);
home_route.get('/waste-water-recycle', homeController.loadRecycle);
home_route.get('/case-studies', homeController.loadCase);
home_route.get('/certificate', homeController.loadCertificate);
home_route.get('/camp', homeController.loadCamp);


module.exports = home_route;