import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const SignInScreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Card>
        <Card.Title>Welcome to AtuhApp</Card.Title>
        <Card.Divider></Card.Divider>
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
        icon={<Entypo name="login" size={24} color="white" />}
        title="Sign In"
        type="solid"
        >
        </Button>

        <Button
        title="Don't Have an account?"
        icon={<MaterialIcons name="create" size={24} color="black" />}
        type="clear"
        onPress={
            function(){
                props.navigation.navigate("SignUp");
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

export default SignInScreen;
