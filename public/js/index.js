/////////////////////////////////////////////////////////////////////////////////////////////  
//    NOTES:
//    Look at https://chartjs-chart-matrix.pages.dev/ to make a calendar chart with chart.js
//    This file will hold the direct methods from the html page, example buttons, lists
//////////////////////////////////////////////////////////////////////////////////////////////
// working on getting a button to call a get request to the server

// NOTE ** test api used
// getting data from server side
const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    xhr.send();
}