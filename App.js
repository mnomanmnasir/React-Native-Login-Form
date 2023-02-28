import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator, TextInput, FlatList, Text, TouchableOpacity, View, Image, ScrollView, Button, ImageBackground } from 'react-native';
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import About from './src/screens/About';
import Navigation from './src/config/Navigation';




export default function App() {
  const [name, setName] = useState("Ashfaq");
  const [email, setEmail] = useState("noman@gmail.com");


  return (

<Navigation />

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 80
    // paddingTop: 80

  },
  //   button:{
  //     // color: 'red'
  //     backgroundColor : 'purple',
  //     width: '80%',
  //     height: 40,
  //     justifyContent: 'center',
  //     alignItems: 'center'
  //   },
  //   btnText:{
  // color : '#fff',

  //   }

  //   main1: {
  //     backgroundColor: 'blue',
  //     width: '100%',
  //     flex: 1
  //   },
  //   main2: {
  //     backgroundColor: 'green',
  //     width: '100%',
  //     flex: 8
  //   },
  //   main3: {
  //     backgroundColor: 'orange',
  //     width: '100%',
  //     flex: 1
  //   },
  //   text: {
  //     fontSize: 30,
  //     color: 'white',
  //   },

  //   boxes: {
  //     // backgroundColor: '#fff'
  //     marginTop: 10,
  //     flex: 1,
  //     flexDirection: "row",
  //     justifyContent: 'space-around',
  // flexWrap: 'wrap',
  // alignContent: 'center',
  // // alignItems: 'flex-end'
  //   },
  //   items: {
  //     backgroundColor: 'white',
  //     width: 100,
  //     height: 100,
  //     marginBottom : 10
  //   }

  card: {
    backgroundColor: '#fff',
    width: '80%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    backgroundColor: 'red',
    width: '70%'
  }
});
