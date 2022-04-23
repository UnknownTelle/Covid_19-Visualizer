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
    }
}

// Render Block
const radarChart = new Chart(
    document.getElementById('radar-chart'),
    radarConfig
);

// Adds data to the radar chart
const addRadarData = async (key) => {
    const data = await lastDayOfMonthData(key)
    const addData = {
        label: key,
        backgroundColor: '',
        data: data
    }
    radarChart.data.datasets.push(addData);
    radarChart.update();
}

// Remove data from radar chart
const removeRadarData = (value) => {
    const index = radarChart.data.datasets.findIndex(x => x.label === value);
    radarChart.data.datasets.splice(index, 1);
    radarChart.update();
}