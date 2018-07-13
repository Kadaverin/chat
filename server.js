const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://kadaverin:1q2w3e@ds137530.mlab.com:37530/test-database');

const routes = require("./routes/api/indexRoutes")(app);

app.listen(3000, () => {
    console.log('listening on 3000')
})