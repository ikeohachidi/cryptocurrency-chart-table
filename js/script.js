(function cryptoApp() {
    let content = document.getElementById("content");
    let entryTemplate = document.getElementById("entry-template").innerHTML;
    let app = new XMLHttpRequest();
    app.open("GET", "https://api.coinmarketcap.com/v2/ticker/?limit=10");
    app.onload = function () {
        if (app.status >= 200 && app.status < 400) {
            let data = JSON.parse(app.responseText).data

            let rankedData = [];
            for (let x in data) {
                rankedData[data[x].rank -1 ] = data[x]
            }

            template = Handlebars.compile(entryTemplate);
            let html = template(rankedData)
            content.innerHTML = html;
        } else {
            console.log("Experiencing slight Technical Issues");
        };
    };
    app.onerror = function() {
        console.log("An Error Occured");
    };
    app.send();
    setTimeout(cryptoApp, 20000)
})()

// https://https://s2.coinmarketcap.com/static/img/coins/16x16/1.png
