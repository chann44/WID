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
import QRCode from "react-native-qrcode-svg";
import { SIZES } from "../../../assets/theme";
import { useAppContext } from "../../context";

export const ReciveQr = ({ navigation }: any) => {
  const { wid } = useAppContext();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000000",
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
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
          <QRCode
            size={200}
            color="white"
            backgroundColor="black"
            logoSize={50}
            value={wid?.wagpay_id}
          />

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
              {wid?.wagpay_id}
            </Text>
            <MaterialIcons name="content-copy" color="#fff" size={20} />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            onPress={() => {
              navigation.navigate("RequestPayment");
            }}
            title={"Request payment"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

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
