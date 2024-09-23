import http from "http"

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  res.end("<h2>Hello fellow developer!</h2>")
})

const hostname = "localhost"
const port = 3000

server.listen(port, hostname, () => {
  console.log(`Server is runnning at http://${hostname}:${port}/`)
})
