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
        label: 'temp',
        tree: [
            {value: 18, month: 'January', name: 1},
            {value: 32, month: 'February', name: 2},
            {value: 22, month: 'March', name: 3},
            {value: 15, month: 'April', name: 4},
            {value: 8, month: 'May', name: 5},
            {value: 12, month: 'June', name: 6},
            {value: 3, month: 'July', name: 1},
            {value: 16, month: 'August', name: 2},
            {value: 23, month: 'September', name: 3},
            {value: 9, month: 'October', name: 4},
            {value: 11, month: 'November', name: 5},
            {value: 4, month: 'December', name: 6},
            {value: 5, month: 'January', name: 2},
            {value: 3, month: 'February', name: 3},
            {value: 7, month: 'March', name: 4},
            {value: 13, month: 'April', name: 5},
            {value: 6, month: 'May', name: 6},
            {value: 22, month: 'June', name: 1},
            {value: 11, month: 'July', name: 2},
            {value: 4, month: 'August', name: 3},
            {value: 6, month: 'September', name: 4},
            {value: 21, month: 'October', name: 5},
            {value: 34, month: 'November', name: 6},
            {value: 1, month: 'December', name: 1},
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

function colourFormat(ctx) {
    if (ctx.type !== 'data'){
        return 'transparent';
    }
    const value = ctx.raw.v;
    let colour = (Math.log(value) / 10)
    return `rgba(255, 26, 104, ${colour})`
}
