import React, { useState } from "react";
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login'
import SignUpScreen from './SignUp'
import YourProfileScreen from './YourProfile'
import EditProfileScreen from './EditProfile'
import RequestsScreen from './Requests'
import InteractionsScreen from './Interactions'

const Stack = createStackNavigator();
// const LoggedOutStack = createStackNavigator();

function logout(){
  axios.post('http://localhost:3000/logout', {},
   {withCredentials: true}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
}

function LoggedIn(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Your Profile"
      onPress={() => navigation.navigate('YourProfile')}
    />
    <Button
      title="Requests"
      onPress={() => navigation.navigate('Requests')}
    />
    <Button
      title="Logout"
      onPress={logout}
    />
  </View>
  );
}

function LoggedOut(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Login"
      onPress={() => navigation.navigate('Login')}
    />
    <Button
      title="Sign Up"
      onPress={() => navigation.navigate('SignUp')}
    />
  </View>
  );
}

function HomeScreen({ navigation }) {
  const [signedIn, setSignedIn] = useState(false);
  if(signedIn){
    return <LoggedIn />;
  }else{
    return <LoggedOut />;
  }
}

function Home() {
  const link = {
    config: {
      screens: {
        Home: 'home',
        Login: 'login',
        YourProfile: 'profile'
      },
    },
  };

  return (
    <NavigationContainer linking={link}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="YourProfile" component={YourProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Requests" component={RequestsScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Interactions" component={InteractionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;
