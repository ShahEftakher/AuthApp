import React, { useState, AsyncStorage } from "react";
import { ScrollView, View, StyleSheet, FlatList } from "react-native";
import {
  Card,
  Button,
  Text,
  Avatar,
  Input,
  Header,
} from "react-native-elements";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";
import {
  getDataJSON,
  setDataJSON,
  concatDataJson,
  getData,
} from "../functions/AsyncStorageFunctions";
import PostCard from "./../components/PostCard";

const getPosts = async () => {
  let posts = await getDataJSON("posts");
  return posts;
};

let post1 = {
  postAuthor: "ESD",
  postBody: "post",
  postTime: "24 may",
  like: [],
  comments: [],
};
let post2 = {
  postAuthor: "ESD",
  postBody: "post2",
  postTime: "24 may",
  like: [],
  comments: [],
};

const HomeScreen = (props) => {
  console.log("Sent props HomePage: "+props);
  const [post, setPost] = useState("");
  const allPosts=[post1,post2];

  console.log(post2);
  
  //allPosts.concat(post2);
  console.log(allPosts);

  // setAllPosts(getPosts());
  //console.log(allPosts);

  const p =
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
            centerComponent={{ text: "The Blog App", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          ></Header>
          <Card>
            <Input
              placeholder="What's On Your Mind?"
              leftIcon={<Entypo name="pencil" size={24} color="black" />}
              onChangeText={function (currentPost) {
                setPost(currentPost);
                console.log(currentPost);
              }}
            />
            <Button
              title="Post"
              type="outline"
              onPress={async function () {
                console.log("saved post: " + post);
                let newPost = {
                  postAuthor: auth.currentUser.name,
                  postBody: post,
                  postTime: "dfdfdf",
                  like: [],
                  comments: [],
                };
                //concatDataJson("posts", newPost, allPosts);
                setDataJSON("posts", newPost);
                //console.log("JSON data: " + getPosts());
                //setAllPosts(getDataJSON("posts"));
                console.log(allPosts);
              }}
            />
          </Card>

          <FlatList
            data={allPosts}
            renderItem={function ({ item }) {
              return (
                <PostCard
                  author={item.postAuthor}
                  title={item.postTime}
                  postBody={item.postBody}
                  navigation={props.navigation}
                />
              );
            }}
          ></FlatList>
    
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

export default HomeScreen;
