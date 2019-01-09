var http = require('http')
var fs = require('fs')
var url = require('url')

// Creating Server
http.createServer(function (request, response) {

    // Parsing directory/file name back of URL
    var pathname = url.parse(request.url).pathname

    console.log("Request for " + pathname + " requested")

    // if file name is empty
    if (pathname=="/") {
        pathname = "/index.html"
    }

    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err)
            // cannot find the page
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'})
        } else {
            // found the page
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'})

            // Read file and save it to responseBody
            response.write(data.toString())
        }

        response.end()
    })

}).listen(8081)

console.log("Server running at http://127.0.0.1:8081")