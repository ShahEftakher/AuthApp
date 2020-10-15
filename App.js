import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const HomeStack = createStackNavigator();
const AtuhStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home Screen"
        component={HomeScreen}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const AtuhStackScreen = () =>{
  return(
    <AtuhStack.Navigator initialRouteName="SignIn">
    <AtuhStack.Screen name="SignIn" component={SignInScreen} options={{headerShown:false}}></AtuhStack.Screen>
    <AtuhStack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}></AtuhStack.Screen>
    </AtuhStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      {/*<HomeStackScreen></HomeStackScreen>*/}
      <AtuhStackScreen></AtuhStackScreen>
    </NavigationContainer>
  );
}

export default App;
