const express = require('express');
const app = express();
module.exports = app
app.get('/', (req, res) => {
    res.send("Express App Responded!!!");
})

//app.listen(process.env.PORT || 3000);
module.exports = app

