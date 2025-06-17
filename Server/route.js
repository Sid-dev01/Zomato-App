const express = require("express")

const route = express.Router();

const locationController = require("./Controller/location");
const restaurantController = require("./Controller/restaurant");
const mealtypeController = require("./Controller/mealtype");
const userController = require("./Controller/user");
const menuController = require("./Controller/menu");

route.get('/location', locationController.getLocation);                     //Home Page - get location
route.get('/restaurant/:city', restaurantController.getRestaurantByCity);   //Home Page - get restauarant by location Id
route.get('/restaurants/:id', restaurantController.getRestaurantById);      //Details - get restaurant by Id Api
route.get('/mealtype', mealtypeController.getmealtype);                     //Home Page - get meal type
route.post('/signup', userController.postSignUp);                           //Home Page - post Sign up  Api
route.post('/login', userController.postlogin);                             //Home Page - post Login Api
route.get('/menu', menuController.getMenu);
route.get('/menu/:resId', menuController.getmenuByRestaurantId)             //Details - Get menu by restaurant id API
route.post('/user', userController.postuserDetails);


//Filte Part
route.get('/restaurant', restaurantController.getRestaurant);
route.post('/filter', restaurantController.filteredRestaurant);



module.exports = route;