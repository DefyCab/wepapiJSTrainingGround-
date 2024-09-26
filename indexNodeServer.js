import http from "http"
import fs from "fs"

const server = http.createServer((req, res) => {
  const fileNameOfUrl = (url) => {
    let fileName = ""
    if (req.url.split("/")[1] === "") {
      fileName = "index.html"
    } else {
      fileName = req.url.split("/")[1]
    }
    return fileName
  }

  const getFileContentOr404 = (fileName) => {
    if (!fs.existsSync(`./static/${fileName}`)) {
      fileName = "404.html"
    }

    return fs.readFileSync(`./static/${fileName}`, "utf-8")
  }

  const fileName = fileNameOfUrl(req.url)
  if (fileName === "favicon.ico") {
    res.statusCode = 404
    res.end("")
    return
  }

  const content = getFileContentOr404(fileName)

  // const content = fs.readFileSync(`./static/${fileName}`, "utf-8")

  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  res.end(content)

  console.log(`The URL for the request was '${req.url}'`)
  console.log(`The method for the request was '${req.method}`)
})

const hostname = "localhost"
const port = 3000

server.listen(port, hostname, () => {
  console.log(`Server is runnning at http://${hostname}:${port}/`)
})
