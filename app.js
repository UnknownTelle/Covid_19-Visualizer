const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

const getData = require('./server/data')

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.post('/', (req, res) => {
    const val = req.body.value
    getData(val).then((result) => {
        res.json(result)
    });
})

// Server setup
const server = http.createServer(app);
server.listen(4000, () => {
    console.log('listening on port 4000');
});