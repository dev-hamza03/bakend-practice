const mongoose = require("mongoose");
require("dotenv").config();

function connectTODb () {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Conneced to database");
    });
};

module.exports = connectTODb;