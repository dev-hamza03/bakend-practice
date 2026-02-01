const app = require("./src/app");
const connectTODb = require("./src/congig/database");

connectTODb();


app.listen(3000, () => {
    console.log("server is running on port 3000");
});
