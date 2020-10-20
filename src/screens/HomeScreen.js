import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Button} from "react-native-elements";

import { AuthContext } from "../providers/AuthProvider";

const HomeScreen = () => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View>
          <Text style={styles.textStyle}>Welcome To HomeScreen </Text>

          <Button
          type="outline"
          title="Log out"
          onPress={
              function(){
                  auth.setIsLoggedIn(false);
              }
          }
          >
          
          </Button>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
});

export default HomeScreen;
