/*-----------------------------------------------------------------
Description: This javaScript file takes care of all the data and 
the manipulation or filtering required.
------------------------------------------------------------------*/

// Gets data from server and sends to correct fuction using value or key
const getData = async (value, key) => {
    const data = { value }
    // specify the type of request and places data in request
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const res = await fetch('/', options) // Send request
    const response = await res.json(); // Gets response
    // Check what data its dealing with and who to send it to
    switch (value) {
        case 'date':
            let dates = [];
            for (let i = 0; i < response.length; i++) {
                dates.push(response[i].split('/').reverse().join('-')) // Format date
            }
            // Check who to send data to
            if (key == 'return') {
                return dates;
            } else {
                drawChart(dates);
            }
            break;
        default: return response;
    }
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

const lastDayOfMonthData = async (key) => {
    const dates = await indexOfMonthsData(2020); // get from added element laster
    let lastDaysData = [];
    const data = await getData(key); // Gets data
    dates.forEach(index => {
        lastDaysData.push(data[index])
    })
    return lastDaysData;
}

// To get the index of last day of month
const indexOfMonthsData = async(year) => {
    const fullSetOfDates = await getData('date', 'return'); // Get all dates
    const lastDayOfMonth = lastDaysDate(year); // Get the last day of the month
    let lastDayOfMonthIndex = []; // Get last day of the month index value
    lastDayOfMonth.forEach(date => {
        lastDayOfMonthIndex.push(fullSetOfDates.findIndex(index => index === date));
    });
    return lastDayOfMonthIndex;
}

// Get the last days of the month date 
const lastDaysDate = (year) => {
    let lastDayDates = [];
    for (var i = 0; i < 12; i++) {
        const month = i + 1;
        const day = new Date(year, month, 0).getDate();
        // format the date
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