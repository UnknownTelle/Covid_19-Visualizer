/*-----------------------------------------------------------------
Description: This javaScript file takes care of the radar chart
------------------------------------------------------------------*/

// Setup Block
const radarData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        label: "",
        backgroundColor: "",
        data: []
    }]
}

// Config Block
const radarConfig = {
    type: 'radar',
    data: radarData,
    options: {
        maintainAspectRatio: false,
        responsive: false,
        plugins: {
            legend: {
                position: 'top'
            },
        },
    }
}

// Render Block
const radarChart = new Chart(
    document.getElementById('radar-chart'),
    radarConfig
);

// Adds data to the radar chart
const addRadarData = async (key, colour) => {
    const yearValue = document.getElementById('render-display-year').value;
    const data = await lastDayOfMonthData(key, yearValue)
    const addData = {
        label: key,
        backgroundColor: colour,
        data: data
    }
    radarChart.data.datasets.push(addData);
    radarChart.update();
}

// Remove data from radar chart
const removeRadarData = (key) => {
    const index = radarChart.data.datasets.findIndex(x => x.label === key);
    radarChart.data.datasets.splice(index, 1);
    radarChart.update();
}

// Will update the data within the chart depenging on select values
const renderUpdate = () => {
    const currentData = [...radarChart.data.datasets] // Gets current data
    radarChart.data.datasets.splice(0, currentData.length) // Removes all current data
    // Gets all the data to send back to addRadarData
    currentData.forEach(dataset => {
        const colour = dataset.backgroundColor;
        const label = dataset.label;
        addRadarData(label, colour);
    });
}