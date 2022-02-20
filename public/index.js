window.addEventListener('load', setup);
async function setup() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const covidData = await getData();
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: covidData.date,
            datasets: [
                {
                    label: 'Total Cases',
                    data: covidData.total_cases,
                    fill: false,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderWidth: 1
                },
                {
                    label: 'New Cases',
                    data: covidData.new_cases,
                    fill: false,
                    borderColor: 'blue',
                    backgroundColor: 'blue',
                    borderWidth: 1
                },
                {
                    label: 'New Cases Smoothed',
                    data: covidData.new_cases_smoothed,
                    fill: false,
                    borderColor: 'green',
                    backgroundColor: 'green',
                    borderWidth: 1
                }
            ]
        },
        options: { responsive: false }
    });
}

async function getData() {
    const response = await fetch('data/UK_data.csv');
    const data = await response.text();
    const date = [];
    const total_cases = [];
    const new_cases = [];
    const new_cases_smoothed = [];
    const rows = data.split('\n').slice(1);
    rows.forEach(row => {
        const cols = row.split(',');
        date.push(cols[0]);
        total_cases.push(parseFloat(cols[1]));
        new_cases.push(parseFloat(cols[2]));
        new_cases_smoothed.push(parseFloat(cols[3]));
    });
    console.log(date);
    console.log(total_cases);
    console.log(new_cases);
    console.log(new_cases_smoothed);
    return { date, total_cases, new_cases, new_cases_smoothed };
}