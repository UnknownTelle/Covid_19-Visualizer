// video using https://www.youtube.com/watch?v=185_Ofuq7T0&ab_channel=ChartJS

window.onload = drawChart();
function drawChart() {
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
        options: {
            maintainAspectRatio: false,
            responsive: true,
        },
        plugins: []
    }
    // Render Block
    const chart = new Chart(
        document.getElementById('chart'),
        config
    )
}