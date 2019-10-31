const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')

app.use(express.static(path.resolve(__dirname, '../public')))


app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
    res.send();
});

app.listen(port, () => console.log(`Listening on port ${port}!`))