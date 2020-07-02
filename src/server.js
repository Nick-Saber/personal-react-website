const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 1234

app.use(express.static(path.resolve(__dirname, '../public')))


//route everything to the index.html page
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
    res.send();
});

app.listen(port, () => console.log(`Listening on port ${port}!`))