import React, { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet, Picker } from 'react-native';
import axios from 'axios';

function SignUpScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("software");

  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })

  function signup() {
    console.log("...")
  }

  /*
  function signup(){
    axios.post('http://localhost:3000/signup', {
      'firstname': profile.firstname,
      'lastname': profile.lastname,
      'email': profile.email,
      'password': profile.password
    }, {withCredentials: true}).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    }).then(() => {
      navigation.navigate('Home');
    });
  }
  */

  function onChangeTextField(key, e) {
    setProfile({
      ...profile,
      [key]: e
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>First Name</Text>
      <TextInput style={styles.inputBox}
        backgroundColor='#1c313a'
        placeholder="Type here..."
        placeholderTextColor = "black"
        textContentType="givenName"
        onChangeText={e => onChangeTextField('firstname', e)}
      />
      <Text>Last Name</Text>
      <TextInput style={styles.inputBox}
        backgroundColor='#1c313a'
        placeholder="Type here..."
        placeholderTextColor = "black"
        textContentType="familyName"
        onChangeText={e => onChangeTextField('lastname', e)}
      />
      <Text>Email</Text>
      <TextInput style={styles.inputBox}
        backgroundColor='#1c313a'
        placeholder="Type here..."
        placeholderTextColor = "black"
        textContentType="emailAddress"
        autoCompleteType="email"
        onChangeText={e => onChangeTextField('email', e)}
      />
      <Text>Password</Text>
      <TextInput style={styles.inputBox}
        backgroundColor='#1c313a'
        placeholder="Type here..."
        placeholderTextColor = "black"
        autoCompleteType="password"
        secureTextEntry="true"
        textContentType="newPassword"
        passwordRules="minlength: 8"
        onChangeText={e => onChangeTextField('password', e)}
      />
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
        textxContentType="organizationName"
      />
      <Button title="Submit" onPress={signup} />
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

export default SignUpScreen
