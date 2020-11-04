import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7129c1" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159C1",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default App;
