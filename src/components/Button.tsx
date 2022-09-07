import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const Button = ({ title, onPress }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
      }}
    >
      <LinearGradient
        colors={["#4B74FF", "#9281FF"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={{fontFamily: 'TTInterfaces', ...styles.text}}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: "100%",
    backgroundColor: "#9281FF",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
