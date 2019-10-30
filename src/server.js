const express = require('express')
const app = express()
const port = 80
const path = require('path')

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}!`))