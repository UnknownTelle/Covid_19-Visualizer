/*  NOTES:
    Look at https://chartjs-chart-matrix.pages.dev/ to make a calendar chart with chart.js
    Finlish placing in the csv data
    Move the csv data within its own files
    Look into making the csv read better (its fine for now)
    Move chart config into its own file
*/

async function setup(year) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const covidData = await getData(year);
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
        options: { responsive: true }
    });
}