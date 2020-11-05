import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from "react-native";

import api from './services/api'

function App() {
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    api.get("/projects").then(response => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    const data = {
      title: `Novo Projeto ${Date.now()}`,
      owner: "João Azevedo"
    }

    const response = await api.post("/projects", data)

    const project = response.data

    setProjects([...projects, project])
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7129c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159C1",
  },

  project: {
    color: "#fff",
    fontSize: 20,
  },

  button: {
    backgroundColor :"#Fff",
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default App;
