import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "../../components/Button";
import QRImage from "../../qr.svg";
import { SIZES } from "../../theme";

const ReciveQr = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000000",
        flex: 1,
        width: "100%",
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 12,
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialIcons
              name="keyboard-arrow-left"
              color={"#fff"}
              size={25}
            />
          </TouchableOpacity>
          <View
            style={{
              flexGrow: 1,
            }}
          >
            <Text style={styles.headerText}>Recive</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <QRImage />
          <Text
            style={{
              marginVertical: 20,
              lineHeight: 25,
              paddingHorizontal: 20,
              textAlign: "center",
              fontSize: SIZES.large,
              color: "white",
            }}
          >
            Scan this address to receive payments
          </Text>
          <View
            style={{
              marginVertical: 12,
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 18,
              width: "100%",
              borderWidth: 1,
              borderColor: "#374151",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Vikash@wagpay
            </Text>
            <MaterialIcons name="content-copy" color="#fff" size={20} />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 40,
            alignItems: "center",
          }}
        >
          <Button title={"Request payment"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReciveQr;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    width: "100%",
  },
  headerText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
});
