// Generating the table with selected data

const buildTable = () => {
    // get dates from labels array and converts to dd-mm-yyyy
    let dates = [];
    const labels = chart.data.labels
    for (var d = 0; d < labels.length; d++){
        dates.push(labels[d].split('-').reverse().join('-'))
    }
    // gets datasets from datesets array
    const dataset = chart.data.datasets
    // gets table object and creates content within
    const table = document.getElementById('table');
    const tableBody = document.createElement('tbody');
    tableBody.setAttribute('id', 'tableBody');
    // create row depending on dateset length
    for (var i = 0; i < dataset.length; i++) {
        const row = document.createElement('tr')
        // dataset[0] will always be for the headers
        if (i == 0) {
            // create the headers
            for (var h = 0; h < 3; h++) {
                const header = document.createElement('th');
                let headerText;
                // place header name depending on h value
                if (h == 0){
                    headerText = document.createTextNode('Name');
                } else if (h == 1) {
                    headerText = document.createTextNode(dates[0]);
                } else {
                    headerText = document.createTextNode(dates[dates.length - 1]);
                }
                header.appendChild(headerText);
                row.appendChild(header);
            }
            // if dataset index is grater then 0 it will be useable content 
        } else {
            // creates the content of table
            for (var c = 0; c < 3; c++){
                const cell = document.createElement('td');
                let cellText;
                // plcase content depending on c value. Will use dataset index to get data
                if (c == 0){
                    cellText = document.createTextNode(dataset[i].label)
                } else if (c == 1){
                    cellText = document.createTextNode(dataset[i].data[0])
                } else {
                    cellText = document.createTextNode(dataset[i].data[dataset[i].data.length - 1])
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        }
        tableBody.appendChild(row);
    }
     table.appendChild(tableBody);
}

// remove table
const removeTable = () => {
    const table = document.getElementById('tableBody');
    if (table) {table.parentNode.removeChild(table)}
}

// check if table exsits
const updateTable = () => {
    const table = document.getElementById('tableBody');
    if (table != null){
        removeTable('tableBody');
        buildTable()
    }
}