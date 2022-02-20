/*  NOTES:
    Look at https://chartjs-chart-matrix.pages.dev/ to make a calendar chart with chart.js
    Finlish placing in the csv data
    Move the csv data within its own files
    Look into making the csv read better (its fine for now)
    Move chart config into its own file
*/

window.addEventListener('load', setup);
async function setup() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const covidData = await getData();
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: covidData.date,
            datasets: [
                {
                    label: 'Total Cases',
                    data: covidData.total_cases,
                    fill: false,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderWidth: 1
                },
                {
                    label: 'New Cases',
                    data: covidData.new_cases,
                    fill: false,
                    borderColor: 'blue',
                    backgroundColor: 'blue',
                    borderWidth: 1
                },
                {
                    label: 'New Cases Smoothed',
                    data: covidData.new_cases_smoothed,
                    fill: false,
                    borderColor: 'green',
                    backgroundColor: 'green',
                    borderWidth: 1
                },
                {
                    label: 'Total Deaths',
                    data: covidData.total_deaths,
                    fill: false,
                    borderColor: 'blue',
                    backgroundColor: 'blue',
                    borderWidth: 1
                },
            ]
        },
        options: { responsive: false }
    });
}

async function getData() {
    const response = await fetch('data/UK_data.csv');
    const data = await response.text();
    // make an array for all filds
    const date = [],
        total_cases = [], 
        new_cases = [], 
        new_cases_smoothed = [],
        total_deaths = [],
        new_deaths = [],
        new_deaths_smoothed = [],
        total_cases_per_million = [],
        new_cases_per_million = [],
        new_cases_smoothed_per_million = [],
        total_deaths_per_million = [],
        new_deaths_per_million = [],
        new_deaths_smoothed_per_million = [],
        reproduction_rate = [];
    // placing the data within the correct array
    const rows = data.split('\n').slice(1);
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
    // returing these arrays
    return { 
        date,
        total_cases, 
        new_cases, 
        new_cases_smoothed,
        total_deaths,
        new_deaths,
        new_deaths_smoothed,
        total_cases_per_million,
        new_cases_per_million,
        new_cases_smoothed_per_million,
        total_deaths_per_million,
        new_deaths_per_million,
        new_deaths_smoothed_per_million,
        reproduction_rate
    };
}