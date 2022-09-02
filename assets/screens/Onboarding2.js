import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";

const Onboarding2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.text1}>
          Simple solution for crosschain payments
        </Text>
      </View>
      <View style={{ marginBottom: 53 }}>
        <Text style={styles.text2}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </View>

      <Button
        title={"Next"}
        onPress={() => {
          navigation.navigate("CreateWalletOnBoarding");
        }}
      />
    </View>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "flex-end",

    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  text1: {
    fontSize: 24,
    color: "#FFFFFF",
    lineHeight: 30,
    fontWeight: "700",
  },
  text2: {
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 21,
    fontWeight: "500",
  },
});
