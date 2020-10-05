var express = require('express');
var fleet = require('./features/fleet');
var app = express();

var bodyParser = require('body-parser');

cars = [];

cars.push("MB A170");
cars.push("MB B170");
cars.push("MB ML230");
cars.push("MB GLA200");

var myFleet = fleet.getFleet();

app.set("view engine", "ejs");

app.use('/assets', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/cars", function (req, res) {
    res.render("cars", { cars: cars });
});

app.get("/fleet", function (req, res) {
    res.render("fleet", { myFleet: myFleet });
});

app.get("/contact", function (req, res) {
    res.render('contact');
});

app.post("/message", function (req, res) {
    res.render('message', { message: req.body.message});
});

app.listen(8080);
console.log("app runs on 8080");