const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./models");
const router = require('./routes/farmily-controller.js');

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    helpers: {
        // Helper function to offset index by one
        incByOne: (value, options) => {
            return parseInt(value) + 1;
        }
    }
}));
app.set("view engine", "handlebars");

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.use('/', router);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("App listening on PORT " + port);
    });
});

module.exports.app = app
