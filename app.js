// const express = require("express");
// const bodyParser = require("body-parser");
// const https = require("https");
// const { log } = require("console");
// const request = require('request');

// const app = express();
// app.use(bodyParser.urlencoded({extended: true}));



// app.use(express.static('./public'));


// app.get("/", function(req,res) {
//     res.sendFile(__dirname + "/index.html");
// })

// app.post("/", function(request,response) {


// var category = 'happiness';
// request.get({
//   url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//   headers: {
//     'X-Api-Key': 'oRSRGWO6mitBVe9SsVBZ5A==PMnSwBDPOQWPUbS1'
//   },
// }, function(error, response, body) {
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// });

//     https.get(url, function(res) {


//         res.on("data", function(data) {
//             const newQuote = JSON.parse(data);
//             console.log(newQuote);

//         })
//     })


// })


// app.listen(3000, function() {
//     console.log("started on port 3000");
// })


// const url = 

// oRSRGWO6mitBVe9SsVBZ5A==PMnSwBDPOQWPUbS1





let quote = document.getElementById("quote");
let author = document.getElementById("author");
let category = document.getElementById("category");
let btn = document.getElementById("button");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {

            author.innerText = item.author;
            quote.innerText = item.content;
            category.innerText = item.tags;

        });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);