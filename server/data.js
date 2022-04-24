const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
module.exports = function getData(val) {
    return new Promise((res, rej) => {
        let results = [];
        fs.createReadStream(path.join(__dirname, '/data/UK-Covid-Dataset.csv'))
            .pipe(csv())
            .on('data', (row) => {
                let value;
                switch (val) {
                    case 'date':
                        value = row.date;
                        break;
                    case 'total_cases':
                        value = row.total_cases;
                        break;
                    case 'new_cases':
                        value = row.new_cases;
                        break;
                    case 'new_cases_smoothed':
                        value = row.new_cases_smoothed;
                        break;
                    case 'total_deaths':
                        value = row.total_deaths;
                        break;
                    case 'new_deaths':
                        value = row.new_deaths;
                        break;
                    case 'new_deaths_smoothed':
                        value = row.new_deaths_smoothed;
                        break;
                    case 'total_cases_per_million':
                        value = row.total_cases_per_million;
                        break;
                    case 'new_cases_per_million':
                        value = row.new_cases_per_million;
                        break;
                    case 'new_cases_smoothed_per_million':
                        value = row.new_cases_smoothed_per_million;
                        break;
                    case 'total_deaths_per_million':
                        value = row.total_deaths_per_million;
                        break;
                    case 'new_deaths_per_million':
                        value = row.new_deaths_per_million;
                        break;
                    case 'new_deaths_smoothed_per_million':
                        value = row.new_deaths_smoothed_per_million;
                        break;
                    case 'reproduction_rate':
                        value = row.reproduction_rate;
                        break;
                        // start here
                    case 'icu_patients':
                        value = row.icu_patients;
                        break;
                    case 'icu_patients_per_million':
                        value = row.icu_patients_per_million;
                        break;
                    case 'hosp_patients':
                        value = row.hosp_patients;
                        break;
                    case 'hosp_patients_per_million':
                        value = row.hosp_patients_per_million;
                        break;
                    case 'weekly_icu_admissions':
                        value = row.weekly_icu_admissions;
                        break;
                    case 'weekly_icu_admissions_per_million':
                        value = row.weekly_icu_admissions_per_million;
                        break;
                    case 'weekly_hosp_admissions':
                        value = row.weekly_hosp_admissions;
                        break;
                    case 'weekly_hosp_admissions_per_million':
                        value = row.weekly_hosp_admissions_per_million;
                        break;
                    case 'total_tests':
                        value = row.total_tests;
                        break;
                    case 'new_tests':
                        value = row.new_tests;
                        break;
                    case 'total_tests_per_thousand':
                        value = row.total_tests_per_thousand;
                        break;
                    case 'new_tests_per_thousand':
                        value = row.new_tests_per_thousand;
                        break;
                    case 'new_tests_smoothed':
                        value = row.new_tests_smoothed;
                        break;
                    case 'new_tests_smoothed_per_thousand':
                        value = row.new_tests_smoothed_per_thousand;
                        break;
                    case 'positive_rate':
                        value = row.positive_rate;
                        break;
                    case 'tests_per_case':
                        value = row.tests_per_case;
                        break;
                    case 'total_vaccinations':
                        value = row.total_vaccinations;
                        break;
                    case 'people_vaccinated':
                        value = row.people_vaccinated;
                        break;
                    case 'people_fully_vaccinated':
                        value = row.people_fully_vaccinated;
                        break;
                    case 'total_boosters':
                        value = row.total_boosters;
                        break;
                    case 'new_vaccinations':
                        value = row.new_vaccinations;
                        break;
                    case 'new_vaccinations_smoothed':
                        value = row.new_vaccinations_smoothed;
                        break;
                    case 'total_vaccinations_per_hundred':
                        value = row.total_vaccinations_per_hundred;
                        break;
                    case 'people_vaccinated_per_hundred':
                        value = row.people_vaccinated_per_hundred;
                        break;
                    case 'people_fully_vaccinated_per_hundred':
                        value = row.people_fully_vaccinated_per_hundred;
                        break;
                    case 'total_boosters_per_hundred':
                        value = row.total_boosters_per_hundred;
                        break;
                    case 'new_vaccinations_smoothed_per_million':
                        value = row.new_vaccinations_smoothed_per_million;
                        break;
                    case 'new_people_vaccinated_smoothed':
                        value = row.new_people_vaccinated_smoothed;
                        break;
                    case 'new_people_vaccinated_smoothed_per_hundred':
                        value = row.new_people_vaccinated_smoothed_per_hundred;
                        break;
                }
                results.push(value)
            })
            .on('end', () => { res(results) })
    })
}