import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const navStack = () => {
    const navStack = createStackNavigator

    return (
        <navStack.Navigator>
            <navStack.Screen>
                name = "Sign in"
            </navStack.Screen>
        </navStack.Navigator>
    )
}

export default navStack;