$.ajax({ url:"https://api.nasa.gov/planetary/apod?api_key=PWhhelBrT1WPUSF5ujClLDHxZV3nMMT4U8Kxz3b9",
success: function(data) {

    console.log(data);

    const info = document.getElementById('info');
    if (data.media_type == "video") {

        info.innerHTML = 
        `<iframe class="mt-2 border border-secondary rounded-lg" src="${data.url}" width="100%" height="600px"></iframe>

        <h2 class="my-3" id="title">${data.title}</h2>
        <h4 class="my-3" id="copyright">By ${data.copyright}</h4>
        <p class="my-3" id="explanation">${data.explanation}</p>
        <a class="mb-3 btn btn-primary" href="https://www.nasa.gov/multimedia/imagegallery/index.html">Visit Nasa image gallery</a>`;
    } else if (data.media_type == "image") {

         info.innerHTML = 
        `<img class="mt-2 rounded-lg" id="img" src="${data.url}" alt="${data.title}" width="100%" height="450px"/>

        <h2 class="my-3" id="title">${data.title}</h2>
        <h4 class="my-3" id="copyright">By ${data.copyright}</h4>
        <p class="my-3" id="explanation">${data.explanation}</p>
        <a class="mb-3 btn btn-primary" href="https://www.nasa.gov/multimedia/imagegallery/index.html">Visit Nasa image gallery</a>`;
    }

    if (data.copyright === undefined) {
            document.getElementById('copyright').innerHTML = `By unknown`;
    }
}
});

if(status === 404) {
    alert('There is no Image of the Day today :(');
}