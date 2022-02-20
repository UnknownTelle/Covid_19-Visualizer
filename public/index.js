window.addEventListener('load', setup);
async function setup() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const yearValues = await getData();
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: yearValues.years,
            datasets: [
                {
                    label: 'Value',
                    data: yearValues.values,
                    fill: false,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderWidth: 1
                }
            ]
        },
        options: { responsive: false }
    });
}

async function getData() {
    const response = await fetch('data/testData.csv');
    const data = await response.text();
    const years = [];
    const values = [];
    const rows = data.split('\n').slice(1);
    rows.forEach(row => {
        const cols = row.split(',');
        years.push(cols[0]);
        values.push(parseFloat(cols[1]));
    });
    return { years, values };
}