const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const http = require('http');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'public\index.html'));
})

// Server setup
const server = http.createServer(app);
server.listen(4000, () => {
    console.log('listening on port 4000');
});