const http = require('http')
const port = 3000
const version = Number(process.version.match(/^v(\d+\.\d+)/)[1])

const requestHandler = (request, response) => {
  response.write("<h1>Hello.  This is our super simple web server</h1>")
  response.end(`Node.js Server version ${version}`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})