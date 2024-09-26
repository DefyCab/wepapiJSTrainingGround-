import express from "express"
const app = express()

const db = [
  {
    id: 1,
    name: "Love B",
    email: "love@bellinder.com",
  },
  {
    id: 2,
    name: "Erik S",
    email: "test@test.com",
  },
]

app.get("/api/developers", (req, res) => {
  res.status(201).setHeader("location", `/api/developers/1`).json(db)
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
