
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
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month',
                    },
                },
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

// Remove datasets from chart
const removeData = (value) => {
    const index = chart.data.datasets.indexOf(value);
    chart.data.datasets.splice(index, 1)
    chart.update();
}

// changes the chart type object
const chartType = async (type) => {
    chart.destroy();
    let date;
    switch (type) {
        case 'bar':
            date = await dataPost();
            drawChart('bar', date);
            break;
        case 'line':
            date = await dataPost();
            drawChart('line');
            break;
    }
}