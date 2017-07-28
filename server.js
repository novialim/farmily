'use strict';

(function() {
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');

    const app = express();
    const PORT = process.env.PORT || 80;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));

    // Serve static files
    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.get('/contribute', function(req, res) {
        res.sendFile(path.join(__dirname, 'contribute.html'));
    });

    // Placeholder route for now
    app.get('/farmer', function(req, res) {
        res.sendFile(path.join(__dirname, 'farmer.html'));
    });

    app.get('/market', function(req, res) {
        res.sendFile(path.join(__dirname, 'market.html'));
    });

    app.get('/form', function(req, res) {
        res.sendFile(path.join(__dirname, 'testform.html'));
    });

    app.get('/review', function(req, res) {
        res.sendFile(path.join(__dirname, 'review.html'));
    });

    app.get('/write', function(req, res) {
        res.sendFile(path.join(__dirname, 'writereview.html'));
    });

    // Placeholder route for now
    app.get('/shoppinglist', function(req, res) {
        res.sendFile(path.join(__dirname, 'shoppinglist.html'));
    });

    // HTML routing to serve different HTML files
    // require("./app/routes/html-routes.js")(app);
    
    app.listen(PORT, function() {
        console.log("Server listening on PORT " + PORT);
    });
}());