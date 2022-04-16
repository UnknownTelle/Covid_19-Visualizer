/*-----------------------------------------------------------------
Description: This javaScript file takes care of the table view 
Create the table with data from chart.js. Methods also created 
to remove and update the table
------------------------------------------------------------------*/
const buildTable = () => {
    // Gets dates and converts the first and last one to dd-mm-yyyy
    const labels = chart.data.labels // Copy array
    const startDate = labels[0].split('-').reverse().join('-'); // Get start date
    const endData = labels[labels.length - 1].split('-').reverse().join('-'); // Get end data

    // gets datasets from datesets array
    // gets table object and creates content within
    const table = document.getElementById('table');
    const tableBody = document.createElement('tbody');
    tableBody.setAttribute('id', 'tableBody');

    const dataset = chart.data.datasets; // Copy chart data
    for (var i = 0; i < dataset.length; i++) { // Make rows
        const row = document.createElement('tr')
        if (i == 0) { // Create the headers
            for (var h = 0; h < 3; h++) {
                const header = document.createElement('th');
                let headerText;
                // place header name depending on h value
                if (h == 0){
                    headerText = document.createTextNode('Name');
                } else if (h == 1) {
                    headerText = document.createTextNode(startDate);
                } else {
                    headerText = document.createTextNode(endData);
                }
                header.appendChild(headerText); // Place text into header
                row.appendChild(header); // Place header into row
            }
        } else { 
            for (var c = 0; c < 3; c++){ // Create table content
                const cell = document.createElement('td');
                let cellText;
                // Plcase content depending on c value.
                if (c == 0){
                    cellText = document.createTextNode(dataset[i].label) // Name
                } else if (c == 1){
                    cellText = document.createTextNode(dataset[i].data[0]) // Start value
                } else {
                    cellText = document.createTextNode(dataset[i].data[dataset[i].data.length - 1]) // End value
                }
                cell.appendChild(cellText); // Place text into cell
                row.appendChild(cell); // Place cell into row
            }
        }
        tableBody.appendChild(row); // Place row into table body
    }
     table.appendChild(tableBody); // Place table body into table
}

// Remove table
const removeTable = () => {
    const table = document.getElementById('tableBody');
    if (table) {
        table.parentNode.removeChild(table)
    }
}

// Update table
const updateTable = () => {
    const table = document.getElementById('tableBody');
    if (table != null){
        removeTable('tableBody');
        buildTable()
    }
}