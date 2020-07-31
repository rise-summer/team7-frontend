import React, { useState } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {

    return (
      <View style={styles.container}>
        <Text>Login to our application</Text>
        <Text>Username</Text>
        <TextInput style={styles.inputBox} 
          backgroundColor='#1c313a' 
          placeholder="Email"
          placeholderTextColor = "black"
        />
        <Text>Password</Text>
        <TextInput style={styles.inputBox} 
          backgroundColor='#1c313a' 
          placeholder="Password"
          placeholderTextColor = "black"
        />  
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Go Back to Home</Text>
        </TouchableOpacity>
        <Text>Don't have an account?</Text> 
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp1')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>   
      </View>
    );
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'black',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});

export default LoginScreen