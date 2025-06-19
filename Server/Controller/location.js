const Location = require('../Models/location')


exports.getLocation = (req, res) => {
    Location.find()
    .then(response =>{
        res.status(200).json({
            message: "Location fetched successfully",
            location: response
        })
    })
    .catch(err => {
        res.status(500).json({error : err})
    })
}

exports.getLocationById = (req, res) => {
    const {city_id} = req.params;
    
    Location.find({city_id : city_id})
    .then(data => {
        res.status(200).json({
            message: "Location fetched successfully by city id.",
            location: data
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}
