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

app.use(express.json())

app.post("/api/developers/", (req, res) => {
  const newDeveloper = {
    id: 3,
    name: req.body.name,
    email: req.body.email,
  }

  db.push(newDeveloper)

  res
    .status(201)
    .setHeader("location", `/api/developers/${newDeveloper.id}`)
    .json(newDeveloper)
})

app.get("/api/developers/:id", (req, res) => {
  const developer = db.find((developer) => developer.id == req.params.id)
  if (!developer) {
    res.status(404).end()
    return
  }
  res.json(developer)
})

app.get("/api/developers", (req, res) => {
  res.json(db)
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
