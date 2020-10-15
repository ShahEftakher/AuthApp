import React from "react";
import {View, Text, StyleSheet} from "react-native";

const HomeScreen=()=>{
    return(<View>
        <Text style={styles.textStyle}>Welcome To HomeScreen </Text>
        </View>);
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30, 
        color: "blue"
    }
});


export default HomeScreen;