import React, { useEffect, useState } from 'react'

import Header from './components/Header'

// import backgroundImg from './assets/background.jpeg'

import api from './services/api'

import './App.css'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    // setProjects([...projects, `Novo Projeto ${Date.now()}`])

    const response = await api.post('/projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "João Azevedo",
    })

    const project = response.data

    setProjects([...projects, project])
  }

  return (
    <>
      <Header title="Projects" />

      {/* <img width={300} src={backgroundImg} alt="background"/> */}

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App