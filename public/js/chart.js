// video using https://www.youtube.com/watch?v=185_Ofuq7T0&ab_channel=ChartJS

//window.onload = drawChart();
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

async function drawChart(year) {
    // Setup Block

    const covidData = await getData(year);
    const data = {
        labels: covidData.date,
        datasets:[{
            label: 'New Cases',
            backgroundColor: getRandomColor(),
            data: covidData.new_cases,
        }]
    }
    // Config Block
    const config = {
        type: 'line',
        data: data,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                position: 'left',
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
        plugins: [],
          
    }
    // Render Block
    const chart = new Chart(
        document.getElementById('chart'),
        config
    )
}