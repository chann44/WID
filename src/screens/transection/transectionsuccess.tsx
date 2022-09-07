import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import SVGImg from "../../../assets/done.svg";
import { SIZES } from "../../../assets/theme";
const TransectionSuccess = ({ navigation, route }: any) => {
  console.log(route, "route");

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "70%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 0,
        }}
      >
        <SVGImg />

        <Text
          style={{
            textAlign: "center",
            marginTop: SIZES.extraLarge,
            fontSize: SIZES.large,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Transaction Successfull
        </Text>
        <View
          style={{
            width: "100%",
          }}
        >
          <Text
            selectable={true}
            style={{
              textAlign: "left",
              marginTop: SIZES.large,
              fontSize: SIZES.small,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Transection Hash: {route.params.tx}
          </Text>

          <Text
            selectable={true}
            style={{
              textAlign: "left",
              marginTop: SIZES.large,
              fontSize: SIZES.small,
              fontWeight: "bold",
              color: "white",
            }}
          >
            ammount: 20938409832080
          </Text>
          <Text
            selectable={true}
            style={{
              textAlign: "left",
              marginTop: SIZES.large,
              fontSize: SIZES.small,
              fontWeight: "bold",
              color: "white",
            }}
          >
            transfred to: satyam@wagpay
          </Text>
          <Text
            selectable={true}
            style={{
              textAlign: "left",
              marginTop: SIZES.large,
              fontSize: SIZES.small,
              fontWeight: "bold",
              color: "white",
            }}
          >
            to chain : Polygo Main net
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            marginBottom: 20,
          }}
          onPress={() => {
            Linking.openURL(
              `https://testnet.bscscan.com/tx/${route.params.tx}`
            );
          }}
        >
          <LinearGradient
            colors={["#4B74FF", "#9281FF"]}
            style={styles.button1}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.buttonText}>View Transaction</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            width: 350,
          }}
        >
          <LinearGradient
            colors={["#4B74FF", "#A560FF80"]}
            style={styles.button2}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View
              style={{
                height: 52,
                marginTop: 1,
                width: 347,
                backgroundColor: "#000",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
              }}
            >
              <Text style={styles.buttonText}>Home Screen</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransectionSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 40,
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
  button1: {
    height: 56,
    width: 350,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    height: 56,
    width: 350,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
});
