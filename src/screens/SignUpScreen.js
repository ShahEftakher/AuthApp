import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

const SignUpScreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Card>
        <Card.Title>Sign Up for your account</Card.Title>
        <Card.Divider></Card.Divider>
        <Input
          placeholder="Name"
          leftIcon={<AntDesign name="user" size={24} color="black" />}
        ></Input>
        <Input
          placeholder="Student ID"
          leftIcon={<AntDesign name="idcard" size={24} color="black" />}
        ></Input>
        <Input
          placeholder="Email Address"
          leftIcon={<MaterialIcons name="email" size={24} color="black" />}
        ></Input>
        <Input
          placeholder="Password"
          leftIcon={<Entypo name="lock" size={24} color="black" />}
          secureTextEntry={true}
        ></Input>

        <Button
        title="Sign Up!"
        icon={<Entypo name="login" size={24} color="white" />}
        type="solid"
        ></Button>

        
        <Button
        title="Already Have an account?"
        icon={<AntDesign name="user" size={24} color="black" />}
        type="clear"
        onPress={
            function(){
                props.navigation.navigate("SignIn");
            }
        }
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
  viewStyle:{
      flex:1,
      justifyContent:"center",
      backgroundColor:"#68B5C3"
  }
});

export default SignUpScreen;
