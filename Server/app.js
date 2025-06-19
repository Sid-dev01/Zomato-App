require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const route = require("./route");

const corsOptions = {
    origin : "http://localhost:3000",
    credentials: true,
    optionSuccessStatus : 200
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

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