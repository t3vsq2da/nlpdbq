const express = require('express');
const bima = require('./setup');
console.log('bnima',bima)
console.log("start")
bima()
const app = express();
module.exports = app
app.get('/', (req, res) => {
    console.log("HI")
    res.send("Express App Responded!!!!!");
})

//app.listen(process.env.PORT || 3000);
module.exports = app

