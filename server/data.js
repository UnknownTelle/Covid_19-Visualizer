const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
module.exports = function getData(val) {
    return new Promise((res, rej) => {
        let results = [];
        fs.createReadStream(path.join(__dirname, '/data/UK-Covid-Dataset.csv'))
            .pipe(csv())
            .on('data', (row) => {
                const value = row[val];
                results.push(value)
            })
            .on('end', () => { res(results) })
    })
}