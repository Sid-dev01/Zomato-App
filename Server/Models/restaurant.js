const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: String,
    city: Number
})

module.exports = mongoose.model("restaurantData", restaurantSchema, "restaurant");