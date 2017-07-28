var express = require ('express')
var app = express ()

app.use(express.static('public'))


app.get('/test', function (req, res){
    res.send ('<p>Test Page</p>')
})

app.listen (3000, function () {
    console.log('listening on port 3000')
})