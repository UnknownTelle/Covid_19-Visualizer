/*-----------------------------------------------------------------
Description: This javaScript file takes care of the line and bar
charts. It wil use Chart.js libray to create the chart. There is 
a function that will allow for the user to add and remove data 
from the line or bar chart.
------------------------------------------------------------------*/

// Create chart
let chart;
async function drawChart(date) {
    // Setup Block
    const data = {
        labels: date,
        datasets: [{
            label: '',
            data: [],
            backgroundColor: '',
            borderColor: ''
        }]
    }
    // Config Block
    const config = {
        type: 'line',
        data: data,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                title: {
                    display: true,
                    text: 'Coronavirus Data'
                  },
            },
            hover: {
                mode: 'nearest',
                intersect: true
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
        document.getElementById('line-bar-chart'),
        config
    )
}

// Adds new data
const addData = async (key, colour) => {
    const data = await getData(key); // Gets data using lable
    const newDataset = {
        label: key,
        data: data,
        backgroundColor: colour,
        borderColor: colour
    }
    chart.data.datasets.push(newDataset); // Push new data
    filterByDate(); // Check to see if dates are correct
}

// Remove exsiting data
const removeData = (value) => {
    const index = chart.data.datasets.findIndex(x => x.label === value); // Get index
    chart.data.datasets.splice(index, 1) // Remove by index
    chart.update();
    updateTable();
}