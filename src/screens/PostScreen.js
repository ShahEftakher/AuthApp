import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Button, Avatar, Header,Input } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";

import { AntDesign, Entypo } from "@expo/vector-icons";

const PostScreen = (props) => {
  const post =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
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
            centerComponent={{ text: "Post Details", style: { color: "#fff" } }}
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
                containerStyle={{ backgroundColor: "#9ae5e5" }}
                rounded
                icon={{ name: "user", type: "font-awesome", color: "white" }}
                activeOpacity={1}
              />
              <Text h4Style={{ padding: 10 }} h4>
                Dwight Schrute
              </Text>
            </View>

            <Text style={{ fontStyle: "italic" }}> Posted on 10 Aug, 2020</Text>
            <Text
              style={{
                paddingVertical: 10,
              }}
            >
              {post}
            </Text>
          </Card>
          <Card>
            <Input
              placeholder="Add a comment"
              leftIcon={<Entypo name="pencil" size={24} color="black" />}
              onChangeText={function (currentPost) {
                setPost(currentPost);
                console.log(currentPost);
              }}
            />
          </Card>
          <Card>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                containerStyle={{ backgroundColor: "#9ae5e5" }}
                rounded
                icon={{ name: "user", type: "font-awesome", color: "white" }}
                activeOpacity={1}
              />
              <Text h1Style={{ padding: 10 }} h4>
                ABC
              </Text>
            </View>

            <Text style={{ fontStyle: "italic" }}> Posted on 10 Aug, 2020</Text>
            <Text
              style={{
                paddingVertical: 10,
              }}
            >
              That is a big tuna
            </Text>
          </Card>
          <Card>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                containerStyle={{ backgroundColor: "#9ae5e5" }}
                rounded
                icon={{ name: "user", type: "font-awesome", color: "white" }}
                activeOpacity={1}
              />
              <Text h1Style={{ padding: 10 }} h4>
                ESD
              </Text>
            </View>

            <Text style={{ fontStyle: "italic" }}> Posted on 10 Aug, 2020</Text>
            <Text
              style={{
                paddingVertical: 10,
              }}
            >
              That is what she said
            </Text>
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
  },
  viewStyle: {
    flex: 1,
  },
});

export default PostScreen;
