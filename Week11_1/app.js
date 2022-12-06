var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();

app.use(function(req, res, next) {
    console.log("Request IP: " + req.baseUrl);
    console.log("Request Date: " + new Date());
    next();
});

app.use(function(req, res, next) {
    var filepath = path.join(__dirname, "static", req.url);
    fs.stat(filepath, function(err, fileInfo) {
        if (err) {
            next();
            return;
        }

        if (fileInfo.isFile()) {
            res.sendFile(filepath);
        } else {
            next();
        }
    });
});

app.use(function(re, res) {
    res.status(404);
    res.send("File Not Found!");
});

app.listen(3000, function() {
    console.log("App started on port 3000");
});