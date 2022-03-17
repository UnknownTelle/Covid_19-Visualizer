const express = require('express');
const http = require('http');
const app = express();
const csv = require('csv-parser');
const fs = require('fs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    csvData()
    res.sendFile(path.join(__dirname + 'public\index.html'));
})
csvData();
function csvData() {
    const data = [];
    fs.createReadStream('UK_data.csv')
        .pipe(csv())
        .on('data', (row) => {
            data[0] = row;
            console.log(data)
        })
        .on('end', () => {
            console.log();
        });
}
// Server setup
const server = http.createServer(app);
server.listen(4000, () => {
    console.log('listening on port 4000');
});