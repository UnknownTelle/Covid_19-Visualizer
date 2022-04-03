const express = require('express');
const http = require('http');
const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.post('/', (req, res) => {
    const val = req.body.value
    dataPromise().then((result) => {console.log(result);})
    res.json({
        sataus: 'success',
        value: 'change'
    });
})

// attempt to move to its own file
function dataPromise() {
    return new Promise((res, rej) => {
        let results = [];
        fs.createReadStream(path.join(__dirname, '/server/data/UK_data.csv'))
            .pipe(csv())
            .on('data', (row) => {results.push(row)})
            .on('end', () => {res(results)})
    })
}

// Server setup
const server = http.createServer(app);
server.listen(4000, () => {
    console.log('listening on port 4000');
});