import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login'
import SignUpScreen from './SignUp'
import YourProfileScreen from './YourProfile'
import EditProfileScreen from './EditProfile'
import RequestsScreen from './Requests'
import InteractionsScreen from './Interactions'
import NotFound from './NotFound'
import FundraiserProfile from './FundraiserProfile'
import { AsyncStorage } from "react-native";
import axios from "axios";
import GLOBALS from '../globals';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const { logout, getAuthState } = React.useContext(GLOBALS.AuthContext);
  if(getAuthState().isLoading){
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  } else if(getAuthState().userToken != null){
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
  }else{
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
}

function Home() {
  const link = {
    config: {
      screens: {
        Home: 'home',
        Login: 'login',
        YourProfile: 'profile',
        SignUp: 'signup',
        User: 'user/:slug',
        NotFound: '*'
      },
    },
  };

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch(action.type){
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('jwt');
      } catch (e) {
        // Restoring token failed
        userToken = null;
      }
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      login: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        let res;
        try {
          res = await axios
            .post(`${GLOBALS.backend_url}/login`, {
              email: data.email,
              password: data.password,
            });
        } catch (err) {
          console.log(err);
          return;
        }

        if (res.error) {
          console.log(res.error);
        } else {
          AsyncStorage.setItem("jwt", res.data.token);
          dispatch({ type: 'SIGN_IN', token: res.data.token });
        }

      },
      logout: () => {
        axios.post('http://localhost:3000/logout').then((res) => {
          AsyncStorage.removeItem("jwt");
          dispatch({ type: 'SIGN_OUT' })
        }).catch((err) => {
          console.log(err);
        });
      },
      signup: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        let res;
        console.log(data);
        try{
          res = await axios.post(
              `${GLOBALS.backend_url}/signup`,
              {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
                description: data.description,
                organization: data.organization
              }
            )
        } catch(err) {
          console.log(err);
          return;
        }
        if (res.error) {
          console.log(res.error);
          return;
        } else {
          AsyncStorage.setItem("jwt", res.data.token);
          dispatch({ type: 'SIGN_IN', token: res.data.token });
        }

      },
      getAuthState: () => {return {...state}}
    }),
    [state]
  );

  return (
    <GLOBALS.AuthContext.Provider value={authContext}>
      <NavigationContainer linking={link}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Interactions" component={InteractionsScreen} />
          <Stack.Screen name="NotFound" component={NotFound} />
          <Stack.Screen name="User" component={FundraiserProfile} />
          {state.userToken == null ? (
            <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          ) : (
            <>
            <Stack.Screen name="YourProfile" component={YourProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
            <Stack.Screen name="Requests" component={RequestsScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GLOBALS.AuthContext.Provider>
  );
}

export default Home;
