'use strict';

(function() {
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const router = require('./routes/farmily-controller.js');

    // Routes
    // =============================================================
    require("./routes/api-routes.js")(app);

    const app = express();
    const PORT = process.env.PORT || 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));

    // Serve static files
    app.use(express.static(path.join(__dirname, 'public')));

    // Load routes
    app.use('/', router);
    
    app.listen(PORT, function() {
        console.log("Server listening on PORT " + PORT);
    });
}());