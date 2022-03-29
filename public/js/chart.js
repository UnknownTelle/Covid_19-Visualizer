// video using https://www.youtube.com/watch?v=185_Ofuq7T0&ab_channel=ChartJS

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let chart ;
let chartData = [];
async function drawChart(chartChoice) {
    // Setup Block
    const covidData = await sortFile();
    const data = {
        labels: covidData.date,
        datasets: [
            // {
            //     label: 'Total Cases',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.total_cases,
            // },
            // {
            //     label: 'New Cases',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.new_cases,
            // },
            // {
            //     label: 'New Cases Smoothed',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.new_cases_smoothed,
            // },
            // {
            //     label: 'Total Deaths',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.total_deaths,
            // },
            // {
            //     label: 'New Deaths',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.new_deaths,
            // },
            // {
            //     label: 'New Deaths Smoothed',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.new_deaths_smoothed,
            // },
            // {
            //     label: 'Total Cases Per Million',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.total_cases_per_million,
            // },
            // {
            //     label: 'New Cases Per Million',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.new_cases_per_million,
            // },
            // {
            //     label: 'New Cases Smoothed Per Million',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.new_cases_smoothed_per_million,
            // },
            // {
            //     label: 'Total Deaths Per Milllion',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.total_deaths_per_million,
            // },
            // {
            //     label: 'New Deaths Per Million',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.new_deaths_per_million,
            // },
            // {
            //     label: 'New Deaths Smoothed Per Million',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.new_deaths_smoothed_per_million,
            // },
            // {
            //     label: 'Reproduction Rate',
            //     backgroundColor: getRandomColor(),
            //     fill: false,
            //     data: covidData.reproduction_rate,
            // },
        ]
    }
    // Config Block
    const config = {
        type: chartChoice,
        data: data,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                position: 'false',
            },
            scales: {
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 20
                    }
                }]
            },
        },
          
    }
    // Render Block
    chart = new Chart(
        document.getElementById('chart'),
        config
    )
}

// changes the chart type object
const chartType = (type) => {
    chart.destroy();
    switch(type) {
        case 'bar':
            drawChart('bar');
          break;
        case 'line':
            drawChart('line');
          break;
      }
}

async function addData(dataName) {
    const gettingData = await sortFile();
    console.log('this is dateName val ' + dataName)
    switch(dataName) {
        case 'total_cases':
            chart.data.datasets.data.push(gettingData.total_cases)
    }
    //chart.data.labels.push(gettingData.date); // This push label
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(gettingData.reproduction_rate) // This is not pushing anything
    });
    chart.update();
}

document.getElementById('data-select').addEventListener('change', function () {
    addData(this.value);
    console.log('You selected: ', this.value);
});
