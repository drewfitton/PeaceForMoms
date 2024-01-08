import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
  
export const CheckBox = (props) => {
    const iconName = props.isChecked ?
        "checkbox-marked" : "checkbox-blank-outline";
    
        const [checkBoxPressed, setCheckBoxPressed]  = useState(false);
        const checkedOrNot = () => {
          if (!checkBoxPressed) {
            <Text> Something is wrong </Text>
          } else {
            /* continue with sign up */
          }
        }
  
    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                <MaterialCommunityIcons 
                    name={iconName} size={24} color="#000" />
            </Pressable>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: 1500,
        marginTop: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 9,
        color: "gray.600",
        marginLeft: 5,
        fontWeight: "600",
    },
});