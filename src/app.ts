/// <reference path="../typings/main.d.ts" />

import * as express from 'express'

var app = express();

var port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("server started on port "+port);
});