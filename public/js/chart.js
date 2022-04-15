// add file description
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
        document.getElementById('chart'),
        config
    )
}

// Add new datasets to chart
const addData = (date, value, label) => {
    const color = generateColour();
    const newDataset = {
        labels: date,
        label: label,
        data: value,
        backgroundColor: color,
        borderColor: color
    }
    chart.data.datasets.push(newDataset);
    chart.update();
    updateTable();
}

// Remove datasets from chart
const removeData = (value) => {
    // gets index from array
    const index = chart.data.datasets.findIndex(x => x.label === value);
    // removes data using the index value
    chart.data.datasets.splice(index, 1)
    chart.update();
    updateTable();
}

// changes the chart type object
const chartType = async (type) => {
    const canvas = document.getElementById('chart');
    const table = document.getElementById('table');
    switch (type) {
        case 'bar':
            canvas.style.visibility = 'visible';
            table.style.visibility = 'hidden';
            removeTable('tableBody');
            chart.config.type = 'bar'
            chart.update()
            break;
        case 'line':
            canvas.style.visibility = 'visible';
            table.style.visibility = 'hidden';
            removeTable('tableBody');
            chart.config.type = 'line'
            chart.update()
            break;
        case 'table':
            canvas.style.visibility = 'hidden';
            table.style.visibility = 'visible';
            buildTable()
            break;
    }
}
// generate a colour for new datasets being added 
const generateColour = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    let result;
    for (var i = 0; i < 6; i++) {
        result = color += letters[Math.floor(Math.random() * 16)];
    }
    return result;
}