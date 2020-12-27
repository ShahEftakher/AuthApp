import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { setDataJSON } from "../functions/AsyncStorageFunctions";
import * as firebase from "firebase";
import "firebase/firestore";

const SignUpScreen = (props) => {
  const [name, setName] = useState("");
  const [sID, setSID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.viewStyle}>
      <Card>
        <Card.Title>Sign Up for your account</Card.Title>
        <Card.Divider></Card.Divider>
        <Input
          placeholder="Name"
          leftIcon={<AntDesign name="user" size={24} color="black" />}
          onChangeText={function (currentInput) {
            setName(currentInput);
          }}
        ></Input>

        <Input
          placeholder="Student ID"
          leftIcon={<AntDesign name="idcard" size={24} color="black" />}
          onChangeText={function (currentInput) {
            setSID(currentInput);
          }}
        ></Input>

        <Input
          placeholder="Email Address"
          leftIcon={<MaterialIcons name="email" size={24} color="black" />}
          onChangeText={function (currentInput) {
            setEmail(currentInput);
          }}
        ></Input>

        <Input
          placeholder="Password"
          leftIcon={<Entypo name="lock" size={24} color="black" />}
          secureTextEntry={true}
          onChangeText={function (currentInput) {
            setPassword(currentInput);
          }}
        ></Input>

        <Button
          title="Sign Up!"
          icon={<Entypo name="login" size={24} color="white" />}
          type="solid"
          onPress={
            function(){
              if (name && sID && email && password) {
                firebase
                  .auth()
                  .createUserWithEmailAndPassword(Email, Password)
                  .then((userCreds) => {
                    userCreds.user.updateProfile({ displayName: name });
                    firebase
                      .firestore()
                      .collection("users")
                      .doc(userCreds.user.uid)
                      .set({
                        name: name,
                        sid: sID,
                        email: email,
                      })
                      .then(() => {
                        alert("Account created successfully!");
                        console.log(userCreds.user);
                        props.navigation.navigate("SignIn");
                      })
                      .catch((error) => {
                        alert(error);
                      });
                  })
                  .catch((error) => {
                    alert(error);
                  });
              } else {
                alert("Fields can not be empty!");
              }
            }
          }
        ></Button>

        <Button
          title="Already Have an account?"
          icon={<AntDesign name="user" size={24} color="black" />}
          type="clear"
          onPress={function () {
            props.navigation.navigate("SignIn");
          }}
        ></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#68B5C3",
  },
});

export default SignUpScreen;
