/*-----------------------------------------------------------------
Description: This javaScript file takes care of the users inputed
data within the application.
------------------------------------------------------------------*/

// Controlthe outcome of the chart choice buttons
const lineBarCanvas = document.getElementById('line-bar-container');
const radarCanvas = document.getElementById('radar-container');
const treemapCanvas = document.getElementById('treemap-container');
const tableView = document.getElementById('table-view');

// Bar chart
document.getElementById('bar').onclick = () => {
    lineBarCanvas.style.display = 'block';
    radarCanvas.style.display = 'none';
    treemapCanvas.style.display = 'none';
    tableView.style.visibility = 'hidden';
    removeTable('tableBody');
    chart.config.type = 'bar'
    chart.update()
};
// Line chart
document.getElementById('line').onclick = () => {
    lineBarCanvas.style.display = 'block';
    radarCanvas.style.display = 'none';
    treemapCanvas.style.display = 'none';
    tableView.style.visibility = 'hidden';
    removeTable('tableBody');
    chart.config.type = 'line'
    chart.update()
};
// Rader chart
document.getElementById('radar').onclick = () => {
    const message = 'The Radar chart will only show the last day of the month data. Do you want to continue?'
    if (confirm(message) == true) {
        lineBarCanvas.style.display = 'none';
        radarCanvas.style.display = 'block';
        treemapCanvas.style.display = 'none';
        tableView.style.visibility = 'hidden';
        removeTable('tableBody');
    }
};
// Treemap chart
document.getElementById('treemap').onclick = () => {
    lineBarCanvas.style.display = 'none';
    radarCanvas.style.display = 'none';
    treemapCanvas.style.display = 'block';
    tableView.style.visibility = 'hidden';
    removeTable('tableBody');
}
// Table view
document.getElementById('table').onclick = () => {
    lineBarCanvas.style.display = 'none';
    radarCanvas.style.display = 'none';
    treemapCanvas.style.display = 'none';
    tableView.style.visibility = 'visible';
    buildTable()
};

// Gets the value and sends to the correct function
const checkboxValue = (key) => {
    if (key.checked) {
        addData(key.value);
        addRadarData(key.value);
    } else {
        removeData(key.value);
        removeRadarData(key.value);
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