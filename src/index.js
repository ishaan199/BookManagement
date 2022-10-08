const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route');
const mongoose  = require('mongoose');
const app = express();

const multer = require("multer");
// const { AppConfig } = require("aws-sdk");
app.use(bodyParser.json());

app.use(multer().any());


mongoose.connect("mongodb+srv://ShailabhSrivastava:LtR74yQBXKkSdvyd@cluster0.cxb6bki.mongodb.net/Project-3", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);
app.all("/*", function (req, res) {
    res.status(400).send({ status: false, message: "invalid http request" });
  });


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});