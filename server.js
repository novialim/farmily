var express = require("express");
var bodyParser = require("body-parser");
//var methodOverride = require("method-override");
var port = process.env.PORT || 3000;

var db = require("./models")

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
// Override with POST having ?_method=DELETE
//app.use(methodOverride("_method"));
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.

// Routes
// =============================================================
//require("./routes/api-routes.js")(app);


db.sequelize.sync().then(()=>{
    app.listen(port);
})

