/// <reference path="../typings/main.d.ts" />
"use strict";
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get("/", function (req, res) {
    res.send("Hello World, process.env.PORT = "+process.env.PORT);
});
app.listen(port, function () {
    console.log("server started on port " + port);
});
//# sourceMappingURL=app.js.map
