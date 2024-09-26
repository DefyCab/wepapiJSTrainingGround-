import express from "express"
const app = express()

const db = [
  {
    id: 1,
    name: "Love B",
    email: "love@bellinder.com",
  },
]

app.get("/", (req, res) => {
  res.status(201).setHeader("location", `/api/developers/1`).json(db[0])
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
