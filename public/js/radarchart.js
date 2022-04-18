/*-----------------------------------------------------------------
Description: This javaScript file takes care of the radar chart
------------------------------------------------------------------*/

// Create radar chart

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        label: "",
        backgroundColor: "",
        data: []
      }]
}
// Config Block
const config = {
    type: 'radar',
    data: data,
    options: {
        maintainAspectRatio: false,
        responsive: false,
    }
}
const radarChart = new Chart(
    document.getElementById('radar'),
    config
  );

const addRadarData = async (key) => {
    const dates = await getData('date', 'return'); // Get all dates
    const lastDayDates = getLastDaysDate(2020); // Get Date requied
    let dateIndex = []; // get last day of month date index 
    lastDayDates.forEach(date => {
        dateIndex.push(dates.findIndex(di => di === date));
    });
            let lastDaysData = [];
            const data = await getData(key); // Gets data
            dateIndex.forEach(index => {
                lastDaysData.push(data[index])
            })
            const addData = {
                label: key,
                backgroundColor: '',
                data: lastDaysData
            }
            radarChart.data.datasets.push(addData);
            radarChart.update();
}
// Remove data
const removeRadarData = () => {

}
// Update data
const updataRadarData = () => {

}

// Get the last days of the month date 
const getLastDaysDate = (year) => {
    // Get the last day of the month
    const getLastDayOfMonth = (year, month) => {
        const day = new Date(year, month + 1, 0).getDate();
        return day
    }
    let lastDayDates = [];
    for (var i = 0; i < 12; i++) {
        const month = i + 1;
        const day = getLastDayOfMonth(year, i);
        let date;
        if (month < 10) {
            date = (year + '-' + '0' + month + '-' + day);
        } else {
            date = (year + '-' + month + '-' + day);
        }
        lastDayDates.push(date);
    }
    return lastDayDates;
}

// Popup message
const popUpMessage = () => {
    
}