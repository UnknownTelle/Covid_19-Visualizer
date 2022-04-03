const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

module.exports = function dataPromise() {
    return new Promise((res, rej) => {
        let results = [];
        fs.createReadStream(path.join(__dirname, '/server/data/UK_data.csv'))
            .pipe(csv())
            .on('data', (row) => {results.push(row)})
            .on('end', () => {res(results)})
    })
}