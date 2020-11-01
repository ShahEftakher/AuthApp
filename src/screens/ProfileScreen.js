import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
const ProfileScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <Header
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: function () {
                props.navigation.toggleDrawer();
              },
            }}
            centerComponent={{ text: "Profile", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          />
          <Card>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                size={300}
                containerStyle={{
                  backgroundColor: "#9ae5e5",
                  flex: 0,
                  marginLeft: 25,
                  marginTop: 0,
                }}
                rounded
                icon={{ name: "user", type: "font-awesome", color: "white" }}
                activeOpacity={1}
              />
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.textStyle}>{auth.currentUser.name}</Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.textStyle2}>StuentID: {auth.currentUser.sID}</Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.textStyle2}>email: {auth.currentUser.email}</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
    alignSelf:"center"
  },
  textStyle2: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
});

export default ProfileScreen;
