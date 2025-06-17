require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const route = require("./route");

const app = express();
app.use(express.json());

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const mongo_url = process.env.MONGO_URL;

app.use('/', route);


mongoose.connect(mongo_url,({
    useNewUrlParser : true,
    useUnifiedTopology: true
}))
.then(app.listen(port, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
}
))
.catch(err => console.log(err));