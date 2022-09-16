/*
 * Project Name: Assignment #1: Hello World
 * Author: Taylor Lee
 * Last modified: September 16th, 2022
 * Desc: Develop a program that requests the end users name and returns that name inside of a greeting based
 * on the time of day. (For example “Good Evening Mark” or “Good Morning Mariella”). 
 */


//Import statements
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  
  //Function to get the the greetins based on the time of day.
  const getCurrentTime=()=>{
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var second = new Date().getSeconds();
    if (hour >= 12 && hour < 13) {
      return <Text>Good afternoon, </Text>
    } if (hour < 12) {
      return <Text>Good morning, </Text>
    } else (hour >= 13); {
      return <Text>Good evening, </Text>
    }
}

//Constants to obtain name information.
const [newName, setnewName] = React.useState('');
const [appNames, appName] = React.useState([]);

//User input handler
const nameInputHandler = (enteredText) => {
  setnewName(enteredText);
};

//Name handler for the button
const addNameHandler = () =>{
  appName(currentName => [...currentName, newName]);
  console.log(newName);
};

  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
      
      <TextInput
        placeholder="Enter your name here: "
        style={styles.input}
        onChangeText={nameInputHandler}
        value={newName}
      />

      <Button
      title="Submit"
      onPress={addNameHandler}
      />

      <StatusBar style="auto" 
      />
      
      </View>
      {appNames.map((name) => <Text>{getCurrentTime()}{name}</Text>)}
    </View>    
  );
}

//Style for background and textbox.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4831B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input :{
    borderColor:"#902EBB", 
    borderWidth:5,
    padding:10
     
  },
  inputContainer :{
    flexDirection :'row', 
    justifyContent :'space-between', 
    alignContent:'center',
    bottom:5
  },
});