var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");


// 整合所有路由
var routes = {}

fs
.readdirSync(__dirname)
.filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
})
.forEach(function (file) {
    routes["/" + file.split(".", 1)[0]] = require(path.join(__dirname, file));
});



module.exports = routes;
