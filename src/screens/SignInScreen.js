import { useLinkProps } from "@react-navigation/native";
import React ,{useState} from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";
import { getDataJSON } from "../functions/AsyncStorageFunctions";


const SignInScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <Card>
            <Card.Title>Welcome to AtuhApp</Card.Title>
            <Card.Divider></Card.Divider>
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
              icon={<Entypo name="login" size={24} color="white" />}
              title="Sign In"
              type="solid"
              onPress={async function () {
                let uesrData = await getDataJSON(email);
                if(uesrData.password == password){
                  auth.setIsLoggedIn(true);
                  auth.setCurrentUser(uesrData);
                }else{
                  alert("Wrong Credentials");
                  console.log(uesrData);
                }
              }}
            ></Button>

            <Button
              title="Don't Have an account?"
              icon={<MaterialIcons name="create" size={24} color="black" />}
              type="clear"
              onPress={function () {
                props.navigation.navigate("SignUp");
              }}
            ></Button>
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
    justifyContent: "center",
    backgroundColor: "#68B5C3",
  },
});

export default SignInScreen;
