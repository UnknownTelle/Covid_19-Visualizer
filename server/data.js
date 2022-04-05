const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
module.exports = function getData(val) {
    return new Promise((res, rej) => {
        let results = [];
        fs.createReadStream(path.join(__dirname, '/data/UK_data.csv'))
            .pipe(csv())
            .on('data', (row) => {
                switch (val) {
                    case 'date':
                        results.push(row.date);
                        break;
                    case 'total_cases':
                        results.push(row.total_cases);
                        break;
                    case 'new_cases':
                        results.push(row.new_cases);
                        break;
                    case 'new_cases_smoothed':
                        results.push(row.new_cases_smoothed);
                        break;
                    case 'total_deaths':
                        results.push(row.total_deaths);
                        break;
                    case 'new_deaths':
                        results.push(row.new_deaths);
                        break;
                    case 'new_deaths_smoothed':
                        results.push(row.new_deaths_smoothed);
                        break;
                    case 'total_cases_per_million':
                        results.push(row.total_cases_per_million);
                        break;
                    case 'new_cases_per_million':
                        results.push(row.new_cases_per_million);
                        break;
                    case 'new_cases_smoothed_per_million':
                        results.push(row.new_cases_smoothed_per_million);
                        break;
                    case 'total_deaths_per_million':
                        results.push(row.total_deaths_per_million);
                        break;
                    case 'new_deaths_per_million':
                        results.push(row.new_deaths_per_million);
                        break;
                    case 'new_deaths_smoothed_per_million':
                        results.push(row.new_deaths_smoothed_per_million);
                        break;
                    case 'reproduction_rate':
                        results.push(row.reproduction_rate);
                        break;
                }
            })
            .on('end', () => {res(results)})
    })
}