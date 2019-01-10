var http = require("http")

// HTTPRequest Option Setting
var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'
}

// Get Response with Callback Function
var callback = function(response) {
    // response event
    var body = ''
    response.on('data', function (data) {
        body += data
    })

    // end event
    response.on('end', function () {
        console.log(body)
    })
}

var req = http.request(options, callback)
req.end()

// Ubuntu Commit Test