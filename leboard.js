var express = require('express')
var app = express()
var sse = require('express-sse')

app.use('/ui', express.static('ui'))

app.get('/', function (req, res) {
    res.redirect('/ui')
})

var port = 8080

app.listen(port, function () {
    console.log('Le Board listening on port ' + port)
})
