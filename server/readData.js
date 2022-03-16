const csv = require('csv-parser');
const fs = require('fs');

function csvDataRead() {
    const data = [];
    fs.createReadStream('UK_data.csv')
        .pipe(csv())
        .on('data', (row) => {
            data[0] = row;
        })
        .on('end', () => {
            console.log();
        });
}

module.exports = { csvDataRead };
