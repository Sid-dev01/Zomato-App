const Restaurant = require("../Models/restaurant");

exports.getRestaurant = (req, res) => {
    Restaurant.find()
    .then(response => {
        res.status(200).json({
            message: "Restaurant fetched successfully",
            Restaurant: response
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
}

exports.getRestaurantByCity = (req, res) => {

    const {city} = req.params;

    Restaurant.find({city: city})
    .then(response => {
        res.status(200).json({
            message: "Restaurant fetched successfully by City Id",
            Restaurant: response
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}

exports.getRestaurantById = (req, res) => {

    const {id} = req.params;

    Restaurant.findById(id)
    .then(response => {
        res.status(200).json({
            message: "Restaurant fetched successfully by Id",
            restaurant: response
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}

exports.filteredRestaurant = (req, res) => {

    let { location , mealtype, lcost, hcost, cuisine, sort, page} = req.body;

    sort = sort ? sort : 1; //ascending Order

    page = page ? page : 1;

    const itemsPerpage = 2;
    let startIndex = page * itemsPerpage - itemsPerpage;
    let endIndex = page * itemsPerpage; 

    var filterObj = {};

    location && (filterObj["city"] = location);
    mealtype && (filterObj["type.mealtype"] = mealtype);
    lcost && hcost && (filterObj["cost"] = { $gte: lcost, $lte:hcost});
    cuisine && (filterObj["Cuisine.cuisine"] = {$in: cuisine});

    Restaurant.find(filterObj).sort({cost : sort})
    .then(response => {
        const filteredResponse = response.slice(startIndex, endIndex);
        res.status(200).json({
            message: "Restaurant filtered successfully",
            restaurant: filteredResponse
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}