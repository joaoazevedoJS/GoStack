const express = require('express')

const app = express()

app.use(express.json())

app.get('/projects', (req, res) => {
  const { title, owner } = req.query

  console.log(`O projeto chamado ${title}, do ${owner}, é muito legal!`)

  return res.json([
    "Projeto 01",
    "Projeto 02",
  ])
})

app.post('/projects', (req, res) => {
  const { title, owner } = req.body
  
  console.log(`O novo projeto chamado ${title}, do ${owner}, é muito legal!`)

  return res.json([
    "Projeto 01",
    "Projeto 02",
    "Projeto 03",
  ])
})

app.put('/projects/:id', (req, res) => {
  const { id } = req.params

  console.log(`O Projeto ${id} é muito legal!`)

  return res.json([
    "Projeto 01",
    "Projeto 04",
    "Projeto 03",
  ])
})

app.delete('/projects/:id', (req, res) => {
  return res.json([
    "Projeto 01",
    "Projeto 03",
  ])
})

app.listen(3333, () => {
  console.log("🚀️ back-end started!")
})