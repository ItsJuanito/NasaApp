
const api = {
    key: "https://api.nasa.gov/planetary/apod?",
    base: "PWhhelBrT1WPUSF5ujClLDHxZV3nMMT4U8Kxz3b9"
} // api key and base

const searchBox = document.querySelector('.form-control');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchBox.value);
        console.log(searchBox.value);
    } //presses the enter key then calls getResult function
}

function getResults(query) {
    fetch(`https://images-api.nasa.gov/search?q=${query}`)
    .then(data => {
        return data.json();
    }).then(displayResults);
} // fetches api and gets results and query then displayResults is executed

function displayResults(data) {
    console.log(data);

    document.write(`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"`);
    document.write(`
        <body>
            <div id="in" class="py-2 container">
            </div>`
    );

    let input = document.getElementById('in').innerHTML = `
        <h1 class="d-flex justify-content-center">NASA's Image of the Day</h1>
        <input class="form-control" id="input" autocomplete="off" type="text" placeholder="Search for an image...">`;

    let size = data.collection.items;

    for (let i = 0; i < size.length; i++) {
            document.write(
                `<div class="container">
                    <div class="card">
                        <div class="card-body">
                            <img class="mt-2 rounded" id="img" src="${data.collection.items[i].links[0].href}"/>
        
                            <h2 class="my-3 card-title" id="title">${data.collection.items[i].data[0].title}</h2>
                            <h4 class="my-3" id="copyright">By ${data.collection.items[i].data[0].photographer}</h4>
                            <p class="my-3 card-text" id="location">Location: ${data.collection.items[i].data[0].location}</p>
                        </div>
                    </div>
                </div>`);
    }

    /*for (let j = 0; j < size.length; j++) {
        if (data.collection.items[j].data[0].photographer === undefined) {
            document.getElementById('copyright').innerText = `By unknown`;
        } 
        if (data.collection.items[j].data[0].innerText === undefined) {
            document.getElementById('location').innerHTML = `Location: unknown`;
        }
    }*/

    document.write(`
    <a class="my-3 btn btn-primary" href="https://www.nasa.gov/multimedia/imagegallery/index.html">Visit Nasa image gallery</a>
    <script src="main.js"></script>
    </body`);
}

