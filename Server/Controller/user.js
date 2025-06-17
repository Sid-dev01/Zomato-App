const User = require("../Models/userDB");


exports.postSignUp = (req, res) => {

    const {email, password, name} = req.body;

    const userObj = new User({
        email,
        password,
        name
    });

    userObj.save()
        .then(response => {
            res.status(200).json({
                message: "User Details Saved Successfully",
                SignUp: response
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.postlogin = (req, res) => {

    const {email, password} = req.body;

    User.find({
        email, 
        password
    })
    .then(response => {
        if(response.length > 0){
            res.status(200).json({
                message: "Log in Successfully",
                login: response,
                isAuthenticated: true
            })
        }else{
            res.status(500).json({
                message: "User Details not found",
                login: response,
                isAuthenticated: false
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}

exports.postuserDetails = (req, res) => {

    
}