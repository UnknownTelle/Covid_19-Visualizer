const selectValue = document.getElementById('data-select');
selectValue.addEventListener('change', function() {
    dataPost(this.value);
    console.log(this.value);
})
const dataPost = async (value) => {
    const data = { value }
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const res = await fetch('/', options)
    const response = await res.json();
    console.log(response);
}
