const express = require("express");
const mongoose = require("mongoose");
const User = require("./Models/userModel")
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();

const router = require("./Routes/user_route");

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect(process.env.URI).then(()=>{
    app.listen(process.env.PORT, () => {
        console.log("server is running in port", process.env.PORT)
    });
}).catch((err) => {
    console.log(err);
});

app.use('/', router);
