const express = require('express');
const http = require('http');
const fs = require('fs'); 
const csv = require('csv-parser');
const app = express();

//const data = require('./server/data');
//console.log(data);
//const loadData = require('./server/loadData');
//console.log(loadData);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'public\index.html'));
})
// https://www.youtube.com/watch?v=1wXYg8Eslnc
app.get('/test', (req,res) => {
    let rows = new Array();
    fs.createReadStream('./server/data/UK_data.csv')
    .on('error', (error) => {
        console.log(error);
    })
    .pipe(csv())
    .on('error', (error) => {
        console.log(error);
    })
    .on('data', (row) => {
        rows.push(row)
    })
    .on('end', (rowCount) => {
        res.json(rows)
    })
})

// Server setup
const server = http.createServer(app);
server.listen(4000, () => {
    console.log('listening on port 4000');
});