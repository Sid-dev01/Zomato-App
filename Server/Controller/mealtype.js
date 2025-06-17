const mealtype = require("../Models/mealtype");

exports.getmealtype = (req, res) => {

    mealtype.find()
    .then(response => {
        res.status(200).json({
            message: "Meal type fetched successfully",
            mealtype: response
        })
    })
}