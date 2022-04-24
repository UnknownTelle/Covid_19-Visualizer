/* 
If you have time to complet
Can use a chart.js plugin to complet
for the doc:
https://chartjs-chart-treemap.pages.dev/usage.html#dividers

To use just add this into the HTML under the chart.js CDN:
<script src="https://cdn.jsdelivr.net/npm/chartjs-chart-treemap@2.0.2/dist/chartjs-chart-treemap.min.js"></script>

Video to add treemap:
https://www.youtube.com/watch?v=fN-M7viEIy8
Video to help with colour:
https://www.youtube.com/watch?v=j8yiJFbCPI0
Video to help format labels:
https://www.youtube.com/watch?v=GLnRak17GFM

 */

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
            text: 'My treemap chart'
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

// Function to add the colour to each group withing the treemap
function colourFormat(ctx) {
    const colourArray = ['0,0,0',
        '252, 40, 40', '252, 152, 3', '38, 36, 66', '61, 75, 145', '3, 252, 244', '3, 49, 252',
        '136, 3, 252', '7, 0, 110', '3, 0, 41', '194, 161, 212', '51, 51, 51', '30,30,30'
    ];
    if (ctx.type !== 'data'){
        return 'transparent';
    }
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
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    const data = await lastDayOfMonthData(key); // Gets data
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

