
let chart;
let chartData = [];

// function to make the chart.js carts
async function drawChart(chartChoice, date) {
    // Setup Block
    const data = {
        labels: date,
        datasets: [{
            label: '',
            data: []
        }]
    }  
    // Config Block
    const config = {
        type: chartChoice,
        data: data,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                position: 'top',
            },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month',
                    },
                },
                y: {
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        }
    }
    // Render Block
    chart = new Chart(
        document.getElementById('chart'),
        config
    )
}

// Add new datasets to chart
const addData = (date, value, label) => {
    // Need to find a way to add data within newDatasets
    const newDataset = {
        labels: date,
        label: label,
        data: value
    }
    chart.data.datasets.push(newDataset);
    chart.update();
}

// changes the chart type object
const chartType = (type) => {
    chart.destroy();
    switch (type) {
        case 'bar':
            drawChart('bar');
            break;
        case 'line':
            drawChart('line');
            break;
    }
}