/*==========================================
| Title:  data
| Author: Telle
| Date:   17 March 2022
| Description: Read and sort throgh csv data
========================================== */

// user can pick what covid data they wish to see based on year
const getFile = async (year) => {
    let response;
    let data;
    switch (year) {
        case 2020:
            response = await fetch('data/UK_data.csv');
            data = await response.text(); 
            break;
        case 2021:
            response = await fetch('data/UK_data.csv');
            data = await response.text();
            break;
        case 2022:
            response = await fetch('data/UK_data.csv');
            data = await response.text();  
            break;
        default: data = null; break;
    }
    return data
}

const sortFile = async (year) => {
    // make the arrays
    const date = [], total_cases = [], new_cases = [], new_cases_smoothed = [],
    total_deaths = [], new_deaths = [], new_deaths_smoothed = [], 
    total_cases_per_million = [], new_cases_per_million = [], 
    new_cases_smoothed_per_million = [], total_deaths_per_million = [],
    new_deaths_per_million = [], new_deaths_smoothed_per_million = [], reproduction_rate = [];
    // read in data
    const data = await getFile(year);
    // sort though data
    const rows = data.split('\n').slice(1);
    // place data within correct array
    rows.forEach(row => {
        const d = row.split(',');
        date.push(d[0]);
        total_cases.push(d[1]);
        new_cases.push(d[2]);
        new_cases_smoothed.push(d[3]);
        total_deaths.push(d[4]);
        new_deaths.push(d[5]);
        new_deaths_smoothed.push(d[6]);
        total_cases_per_million.push(d[7]);
        new_cases_per_million.push(d[8]);
        new_cases_smoothed_per_million.push(d[9]);
        total_deaths_per_million.push(d[10]);
        new_deaths_per_million.push(d[11]);
        new_deaths_smoothed_per_million.push(d[12]);
        reproduction_rate.push(d[13]);
    });
    // return arrays
    return {
        date, total_cases, new_cases, new_cases_smoothed, total_deaths,
        new_deaths, new_deaths_smoothed, total_cases_per_million, new_cases_per_million,
        new_cases_smoothed_per_million, total_deaths_per_million, new_deaths_per_million,
        new_deaths_smoothed_per_million, reproduction_rate
    }
}