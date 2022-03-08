/*  NOTES:
    Look at https://chartjs-chart-matrix.pages.dev/ to make a calendar chart with chart.js
    Finlish placing in the csv data
    Move the csv data within its own files
    Look into making the csv read better (its fine for now)
    Move chart config into its own file
*/
 // Not using my data but is a diffrent way to config the chart to reduce code.
 // Started to look into chart.js API to move it to the back end
window.onload = getChart();
async function getChart(){
    // Setup Block
    const labels = [
        'test',
        'test2',
        'test3',
        'test4',
        'test5'
    ];
    const data = {
        labels: labels,
        datasets:[{
            label: [],
            backgroundColor: '',
            borderColor: '',
            fill: false,
            data: [4, 6, 10, 4, 3],
        }]
    }
    // Config Block
    const config = {
        type: 'line',
        data: data,
        options: {},
        plugins: []
    }
    // Render Block
    const chart = new Chart(
        document.getElementById('myChart'),
        config
    )
}

// async function setup(year) {
//     const ctx = document.getElementById('myChart').getContext('2d');
//     const covidData = await getData(year);
//     const myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: covidData.date,
//             datasets: [
//                 {
//                     label: 'Total Cases',
//                     data: covidData.total_cases,
//                     fill: false,
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     backgroundColor: 'rgba(255, 99, 132, 0.5)',
//                     borderWidth: 1
//                 },
//                 {
//                     label: 'New Cases',
//                     data: covidData.new_cases,
//                     fill: false,
//                     borderColor: 'blue',
//                     backgroundColor: 'blue',
//                     borderWidth: 1
//                 },
//                 {
//                     label: 'New Cases Smoothed',
//                     data: covidData.new_cases_smoothed,
//                     fill: false,
//                     borderColor: 'green',
//                     backgroundColor: 'green',
//                     borderWidth: 1
//                 },
//                 {
//                     label: 'Total Deaths',
//                     data: covidData.total_deaths,
//                     fill: false,
//                     borderColor: 'blue',
//                     backgroundColor: 'blue',
//                     borderWidth: 1
//                 },
//                 {
//                     label: 'New Deaths',
//                     data: covidData.new_deaths,
//                     fill: false,
//                     borderColor: 'yellow',
//                     backgroundColor: 'yellow',
//                     borderWidth: 1
//                 },
//             ]
//         },
//         options: {
//             responsive: true,
//             legend: {
//                 position: 'top',
//             },
//             interaction: {
//                 intersect: false,
//                 axis: 'x',
//                 mode: 'nearest',
//             },
//         }
//     });
// }