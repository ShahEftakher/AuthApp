import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

import { AuthProvider, AuthContext } from "./src/providers/AuthProvider";
import NotificationScreen from "./src/screens/NotificationScreen";
import { InputAccessoryView } from "react-native";
import ProfileScreen from "./src/screens/ProfileScreen";

const HomeStack = createStackNavigator();
const AtuhStack = createStackNavigator();
const HomeTab = createMaterialBottomTabNavigator();
const AppDrawer = createDrawerNavigator();

const AppDrawerScreen = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen
        name="Home"
        component={HomeTabSrceen}
      ></AppDrawer.Screen>
      <AppDrawer.Screen
        name="Profile"
        component={ProfileScreen}
      ></AppDrawer.Screen>
    </AppDrawer.Navigator>
  );
};

const HomeTabSrceen = () => {
  return (
    <HomeTab.Navigator initialRouteName="Home Screen">
      <HomeTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => {
            focused ? (
              <Entypo name="home" color="white" size={26} />
            ) : (
              <AntDesign name="home" color="white" size={22} />
            );
          },
        }}
      ></HomeTab.Screen>
      <HomeTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ focused }) => {
            focused ? (
              <Ionicons name="ios-notifications" size={26} color="white" />
            ) : (
              <Ionicons
                name="ios-notifications-outline"
                size={22}
                color="white"
              />
            );
          },
        }}
      ></HomeTab.Screen>
    </HomeTab.Navigator>
  );
};

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

const AtuhStackScreen = () => {
  return (
    <AtuhStack.Navigator initialRouteName="SignIn">
      <AtuhStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      ></AtuhStack.Screen>
      <AtuhStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      ></AtuhStack.Screen>
    </AtuhStack.Navigator>
  );
};

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {console.log(auth)}
            {auth.isLoggedIN ? (
              <AppDrawerScreen></AppDrawerScreen>
            ) : (
              <AtuhStackScreen></AtuhStackScreen>
            )}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
