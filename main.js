$.ajax({ url:"https://api.nasa.gov/planetary/apod?api_key=PWhhelBrT1WPUSF5ujClLDHxZV3nMMT4U8Kxz3b9",
success: function(data) {

    console.log(data);

    const info = document.getElementById('info');
    if (data.media_type == "video") {

        info.innerHTML = 
        `<iframe src="${data.url}" width="800px" height="500px">
        </iframe>

        <h2 id="title">${data.title}</h2>
        <h4 id="copyright">By ${data.copyright}</h4>
        <p id="explanation">${data.explanation}</p>`;
    } else if (data.media_type == "image") {
        document.getElementById('info').innerHTML = `<img id="img" src="${data.url}" class="rounded" alt="Cinque Terre" width="75%" height="30%">`;
    }

    if (data.copyright === undefined) {
            document.getElementById('copyright').innerHTML = `By unknown`;
    }
}
});