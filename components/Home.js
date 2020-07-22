import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login'
import SignUpScreen1 from './SignUp1'
import SignUpScreen2 from './SignUp2'
import SignUpScreen3 from './SignUp3'

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp1')}
        />
      </View>
    );
}

function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp1" component={SignUpScreen1} />
        <Stack.Screen name="SignUp2" component={SignUpScreen2} />
        <Stack.Screen name="SignUp3" component={SignUpScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;
