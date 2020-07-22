import React, { useState } from "react";
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function SignUpScreen3({ navigation }) {
  // const [input, setInput] = useState('Default Text');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Step 3 of 3</Text>
      <Text>Choose how you want to help</Text>

      <Button title="+"  />
      <Text>Add a service</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Submit" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default SignUpScreen3
