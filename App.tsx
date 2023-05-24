import React from "react";
import { View } from "react-native";
import Login from "./components/Login";
import SignupPage from "./components/Signup";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;