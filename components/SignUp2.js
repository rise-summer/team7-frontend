import React, { useState } from "react";
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

function SignUpScreen2({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("red cross");
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Step 2 of 3</Text>
        <Text>Choose your cause</Text>
        <Text>Choose your cause category</Text>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Red Cross" value="red cross" />
          <Picker.Item label="Relay for Life" value="relay for life" />
        </Picker>
        <Text>Search for an organization</Text>
        <TextInput style={styles.inputBox} 
          backgroundColor='#1c313a' 
          placeholder="Type here..."
          placeholderTextColor = "black"
        />
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Next" onPress={() => navigation.navigate('SignUp3')} />
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
    color:'#ffffff',
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

export default SignUpScreen2