const express = require('express')
const { uuid, isUuid } = require('uuidv4')

const app = express()

app.use(express.json())

const projects = []

function logRequest(request, response, next) {
  const { method, url } = request

  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.time(logLabel)

  next()
  
  console.timeEnd(logLabel)
}

function validateProjectId(request, response, next) {
  const { id } = request.params

  if(!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid Project Id' })
  }

  return next()
}

app.use(logRequest)
app.use('/projects/:id', validateProjectId)

app.get('/projects', (req, res) => {
  const { title } = req.query

  const result = title 
    ? projects.filter(project => project.title.includes(title))
    : projects

  return res.json(result)
})

app.post('/projects', (req, res) => {
  const { title, owner } = req.body
  
  const project = { id: uuid(), title, owner }

  projects.push(project)

  return res.json(project)
})

app.put('/projects/:id', (req, res) => {
  const { id } = req.params
  const { title, owner } = req.body

  const projectIndex = projects.findIndex(project => project.id === id)

  if(projectIndex < 0) {
    return res.status(400).json({ error: 'Project not found!' })
  }

  const project = { id, title, owner }

  projects[projectIndex] = project

  return res.json(project)
})

app.delete('/projects/:id', (req, res) => {
  const { id } = req.params

  const projectIndex = projects.findIndex(project => project.id === id)

  if(projectIndex < 0) {
    return res.status(400).json({ error: 'Project not found!' })
  }

  projects.splice(projectIndex, 1)

  return res.status(204).send()
})

app.listen(3333, () => {
  console.log("🚀️ back-end started!")
})