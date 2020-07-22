import React, { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet, Picker } from 'react-native';

function SignUpScreen1({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("software");

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Step 1 of 3</Text>
      <Text>Introduce Yourself</Text>
      <Text>Short Bio</Text>
      <TextInput style={styles.inputBox} 
        backgroundColor='#1c313a' 
        placeholder="Type here..."
        placeholderTextColor = "black"
      />
      <Text>What industry do you work at?</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Software" value="software" />
        <Picker.Item label="Design" value="design" />
        <Picker.Item label="Business" value="business" />
      </Picker>
      <Text>What company do you work at?</Text>
      <TextInput style={styles.inputBox} 
        backgroundColor='#1c313a' 
        placeholder="Company name"
        placeholderTextColor = "black"
      />
      <Button title="Next" onPress={() => navigation.navigate('SignUp2')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Text>Have an account?</Text> 
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
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

export default SignUpScreen1