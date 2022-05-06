
const treeData = {
    datasets: [{
        tree: [
            {value: '0', month:'none', name:'none'}
        ],
        backgroundColor: (ctx) => colourFormat(ctx),
        labels: {
            display: true,
            align: 'center',
            position: 'center'
        },
        key: 'value',
        groups: ['month', 'name']
    }]
}
// Config
const treeConfig = {
    type: 'treemap',
    data: treeData,
    options: {
        plugins: {
          title: {
            display: true,
            text: 'Coronavirus Data'
          },
          legend: {
            display: false
          }
        }
      }
}
// Render
const treemapChart = new Chart(
    document.getElementById('treemap-chart'),
    treeConfig
);

// (ctx) => colourFormat(ctx),

// Function to add the colour to each group withing the treemap
function colourFormat(ctx) {
    const colourArray = ['0,0,0',
    '245, 29, 29', '48, 207, 17', '10, 32, 199', '255, 170, 0', '255, 0, 242', 
    '240, 29, 29', '48, 217, 17', '10, 42, 199', '255, 180, 0', '255, 10, 242',
    '250, 29, 29', '48, 227, 17'];

    if (ctx.type !== 'data'){ return 'transparent'; }
    const monthArray = [];
    const treemapDatasets = ctx.chart.config._config.data.datasets[0]
    treemapDatasets.tree.forEach(month => {
        monthArray.push(month.month);
    });
    const filterMonthArray = [...new Set(monthArray)];
    const indexOfMonth = filterMonthArray.indexOf(ctx.raw._data.month);

    const value = ctx.raw.v;
    let colour = (Math.log(value) / 40)
    return `rgba(${colourArray[indexOfMonth]}, ${colour})`
}

// Function to add new data to the treemap
const addTreemapData = async (key) => {
    const yearValue = document.getElementById('treemap-display-year').value;
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    const data = await lastDayOfMonthData(key, yearValue); // Gets data
    for (var i = 0; i < data.length; i++){ 
        // Formats the data
        const newData = {
            value: data[i],
            month: months[i],
            name: key
        }
        // Adds newData to array
        treemapChart.data.datasets[0].tree.push(newData);
    }
    treemapChart.update(); // Updates chart
}

// Function to remove data from the treemap
const removeTreemapData = async (key) => {
    const data = await treemapChart.data.datasets[0].tree; // Gets current data
    const firstIndex = data.findIndex(x => x.name === key) // Find first index
    treemapChart.data.datasets[0].tree.splice(firstIndex, 12); // Removes 12 from first index
    treemapChart.update(); // Update chart
}

const treemapUpdate = () => {
    const currentData = [...treemapChart.data.datasets[0].tree];
    treemapChart.data.datasets[0].tree.splice(0, currentData.length)
    let nameArray = [];
    currentData.forEach(tree => {
        nameArray.push(tree.name)
    });
    filterNameArray = [...new Set(nameArray)];
    filterNameArray.forEach(name => {
        addTreemapData(name);
    })
}

