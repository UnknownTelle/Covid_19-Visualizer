
// gets value of selected checkbox 
const getValue = (object) => {
    if (object.checked){
        dataPost(object.value);
    } else {
        removeData(object.value)
    }
}

// sends a request to server and receives responce
const dataPost = async (value, key) => {
    const data = { value }
    // specify the type of request and places data in request
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    // sends request to server
    const res = await fetch('/', options)
    // gets servers responce
    const response = await res.json();
    // sends to the right function
    if (value == 'date'){
        let dates = [];
        for (let i = 0; i < response.length; i++) {
            // formats date to yyyy-mm-dd and place into date array
            dates.push(response[i].split('/').reverse().join('-'))
        }
        if (key == 'filterByDate'){
            return dates;
        } else {
            drawChart(dates);
        }
    } else {
        if (key == 'filterByDate'){
            return response;
        } else {
            addData(response, value)
        }
    }
}

window.onload = dataPost('date')