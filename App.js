import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./components/Navigation/Navigation";
import RegisterScreen from "./components/Form/Register";
import LoginScreen from "./components/Form/Login";
import Loading from "./components/Loading/Loading";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Navigation} options={{ headerShown: false }} />
      </Stack.Navigator>
      {/* <Navigation /> */}
    </NavigationContainer>
  );
}
