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

app.get("/api/developers/:id", (req, res) => {
  const developer = db.find((developer) => developer.id == req.params.id)
  if (!developer) {
    res.status(404).end()
    return
  }
  res.json(developer)
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
