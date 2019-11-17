const express = require("express");
const app = express();

//routes
app.get("/", function(req, res) {
    res.send("it works!");
});

app.get("/mercury", function(req, res) {
    res.send("This will be Mercury web page!");
});

app.get("/venus", function(req, res) {
    res.send("This will be Venus web page!");
})

//server listener
app.listen("8080", "127.0.0.1", function() {
    console.log("Express server is Running...");
});

