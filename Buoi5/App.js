import { MainStackNavigator } from "./src/Stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
