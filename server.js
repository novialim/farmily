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

    // Placeholder route for now
    app.get('/farmee', function(req, res) {
        res.sendFile(path.join(__dirname, 'farmee.html'));
    });

    // Placeholder route for now
    app.get('/shoppinglist', function(req, res) {
        res.sendFile(path.join(__dirname, 'shoppinglist.html'));
    });

    app.listen(PORT, function() {
        console.log("Server listening on PORT " + PORT);
    });
}());