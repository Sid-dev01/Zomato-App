const Menu = require("../Models/menu");

exports.getMenu = (req, res) => {

    Menu.find()
    .then(response => {
        res.status(200).json({
            message: "Menu data fetched successfully",
            Menu: response
        })
    })
}

exports.getmenuByRestaurantId = (req, res) => {

    const {resId} = req.params;

    Menu.find({ restaurantId : resId})
    .then(response => {
        res.status(200).json({
            message: "Successfully fetched menu by Restaurant Id",
            menu: response
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })

}
