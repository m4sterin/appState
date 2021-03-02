import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
class App extends Component {
  render() {
    return (
      <View 
      style={{ 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'flex-end'
        }}>
        <View style={{ width: 50, height: 70, backgroundColor: "green" }}></View>
        <View style={{ width: 50, height: 70, backgroundColor: "red" }}></View>
        <View style={{ width: 50, height: 70, backgroundColor: "blue" }}></View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textoUm: {
    fontSize: 25,
    color: "#FFF000",
  },
  textoAlinha: {
    textAlign: "center",
  },
  textoTres: {
    fontSize: 25,
    color: "#FFF000",
  },
});
