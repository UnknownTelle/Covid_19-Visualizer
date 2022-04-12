
// gets value of selected checkbox 
const getValue = (object) => {
    if (object.checked){
        dataPost(object.value);
    } else {
        removeData(object.value)
    }
}

// sends a request to server and receives responce
const dataPost = async (value) => {
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

    extractData(response, value)
}

const extractData = (data, label) => {
    let date = []
    let value = []

    // Place date and value in its own array 
    for (let i = 0; i < data.length; i++) {
        // formats date to yyyy-mm-dd and place into date array
        date.push(data[i].date.split('/').reverse().join('-'))
        // places value object into newValue array
        value.push(data[i].value)
    }
    // chack to see if its an onload call
    if (label != null){
        addData(date, value, label)
    } else {
        drawChart('line', date);
    }
}

window.onload = dataPost()