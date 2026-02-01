const app = require("./src/app");

const mongoose = require("mongoose");

function connectToDb () {
    mongoose.connect("mongodb+srv://hamza:80an52MYGSJV1c58@cluster0.y4jy881.mongodb.net/")
    .then(() => {
        console.log("Connected to database");
    });
};

connectToDb();


app.listen(3000, () => {
    console.log("server is running or port 3000");
});