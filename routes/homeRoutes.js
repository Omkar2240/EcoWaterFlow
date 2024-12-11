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
home_route.get('/discussion', homeController.loadDiscussion);
home_route.get('/high', homeController.loadHigh);

module.exports = home_route;