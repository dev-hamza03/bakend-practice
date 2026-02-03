const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb();

app.listen(3000,() => {
    console.log("serer is running on port 3000");
});