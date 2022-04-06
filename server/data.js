const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
module.exports = function getData(val) {
    return new Promise((res, rej) => {
        let results = [];
        fs.createReadStream(path.join(__dirname, '/data/UK_data.csv'))
            .pipe(csv())
            .on('data', (row) => {
                let data;
                switch (val) {
                    case 'total_cases': data = {total_cases : row.total_cases}; break;
                    case 'new_cases': data = {new_cases: row.new_cases}; break;
                    case 'new_cases_smoothed': data = {new_cases_smoothed: row.new_cases_smoothed}; break;
                    case 'total_deaths': data = {total_deaths: row.total_deaths}; break;
                    case 'new_deaths': data = {new_deaths: row.new_deaths}; break;
                    case 'new_deaths_smoothed': data = {new_deaths_smoothed: row.new_deaths_smoothed}; break;
                    case 'total_cases_per_million': data = {total_cases_per_million: row.total_cases_per_million}; break;
                    case 'new_cases_per_million': data = {new_cases_per_million: row.new_cases_per_million}; break;
                    case 'new_cases_smoothed_per_million': data = {new_cases_smoothed_per_million: row.new_cases_smoothed_per_million}; break;
                    case 'total_deaths_per_million': data = {total_deaths_per_million: row.total_deaths_per_million}; break;
                    case 'new_deaths_per_million': data = {new_deaths_per_million: row.new_deaths_per_million}; break;
                    case 'new_deaths_smoothed_per_million': data = {new_deaths_smoothed_per_million: row.new_deaths_smoothed_per_million}; break;
                    case 'reproduction_rate': data = {reproduction_rate: row.reproduction_rate}; break;
                }
                results.push({date: row.date, value: data})
            })
            .on('end', () => {res(results)})
    })
}