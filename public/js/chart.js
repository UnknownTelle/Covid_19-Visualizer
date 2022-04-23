/*-----------------------------------------------------------------
Description: This javaScript file takes care of the line and bar
charts. Within this file you will also have the add data, 
remove data and filter data methods.
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
                }
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
const addData = async (key) => {
    const data = await getData(key); // Gets data using lable
    const color = generateColour();
    const newDataset = {
        label: key,
        data: data,
        backgroundColor: color,
        borderColor: color
    }
    chart.data.datasets.push(newDataset); // Push new data
    addRadarData(key);
    filterByDate(); // Check to see if dates are correct
}

// Remove exsiting data
const removeData = (value) => {
    const index = chart.data.datasets.findIndex(x => x.label === value); // Get index
    chart.data.datasets.splice(index, 1) // Remove by index
    chart.update();
    updateTable();
}

// Filters the data displayed by the inputted dates
const filterByDate = async () => {
    // Get current inputted date values
    const startDate = document.getElementById('start_date').value;
    const endDate = document.getElementById('end_date').value;

    // Gets the dates and filter them depending on inputted data
    const dates = await getData('date', 'return'); // Get dates
    const indexOfStartDate = dates.findIndex(sd => sd === startDate); // Get indexs
    const indexOfEndDate = dates.findIndex(ed => ed === endDate); // Get indexs
    const filterDate = dates.slice(indexOfStartDate, indexOfEndDate + 1); // Filter
    chart.config.data.labels = filterDate; // Replace data

    // Gets chart data and filters it depending on inputted data
    const datasets = [...chart.data.datasets] // Copy chart data
    for (var i = 0; i < datasets.length; i++) {
        const label = datasets[i].label // Get lable
        const data = await getData(label, 'return'); // Gets data using lable
        const filterDateValue = data.slice(indexOfStartDate, indexOfEndDate + 1); // Filter data
        chart.config.data.datasets[i].data = filterDateValue; // Replace data
    }
    chart.update();
    updateTable();
}