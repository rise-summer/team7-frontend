import * as React from "react";
import DonorButton from "./components/Donor";
import FundraiserProfile from "./components/FundraiserProfile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@chakra-ui/core";

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Donation App">
          <Stack.Screen name="Donation App" component={DonorButton} />
          <Stack.Screen name="Fundraiser" component={FundraiserProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
