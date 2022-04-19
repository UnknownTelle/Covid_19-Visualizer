/*-----------------------------------------------------------------
Description: This javaScript file takes care of all indirect methods
within this application, example methods that link to the server or
collect the data from the HTML page.
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

// Changes the display depending on choice
const diplayChart = async (type) => {
    const canvas = document.getElementById('chart');
    const radar = document.getElementById('radar')
    const table = document.getElementById('table');
    switch (type) {
        case 'bar':
            canvas.style.display = 'block';
            radar.style.display = 'none';
            table.style.visibility = 'hidden';
            removeTable('tableBody');
            chart.config.type = 'bar'
            chart.update()
            break;
        case 'line':
            canvas.style.display = 'block';
            radar.style.display = 'none';
            table.style.visibility = 'hidden';
            removeTable('tableBody');
            chart.config.type = 'line'
            chart.update()
            break;
        case 'radar':
            canvas.style.display = 'none';
            radar.style.display = 'block';
            table.style.visibility = 'hidden';
            removeTable('tableBody');
            break;
        case 'table':
            canvas.style.visibility = 'hidden';
            radar.style.display = 'none';
            table.style.visibility = 'visible';
            buildTable()
            break;
    }
}

// Gets the value and sends to the correct function
const checkboxValue = (key) => {
    if (key.checked) {
        addData(key.value);
    } else {
        removeData(key.value)
    }
}

// Generate a colour
const generateColour = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    let result;
    for (var i = 0; i < 6; i++) {
        result = color += letters[Math.floor(Math.random() * 16)];
    }
    return result;
}

window.onload = getData('date')