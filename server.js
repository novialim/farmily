const express = require("express");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();
const port = process.env.PORT || 3000;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Routes
const controller = require("./routes/farmily-controller.js");
const apiRoutes = require("./routes/api-routes.js");

// =============================================================
app.use("/", controller);
app.use("/api", apiRoutes);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("App listening on PORT " + port);
    });
});
 