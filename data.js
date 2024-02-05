fetch("https:cors-anywhere.herokuapp.com/https:cfpyapi.app.cloud.gov/get_table", { 
headers: {
    'x-requested-with': 'XMLHttpRequest'
}
})
.then(response => {
    if (!response.ok) {
        throw new Error('HTTP error: ' + response.status);
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(function () {
    console.log('Request Failed');
});