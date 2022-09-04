import {
  ScrollViewComponent,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import AssetContainer from "../components/AssetContainer";
import { Paymentrequest } from "../components/paymentrequest";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../assets/theme";
import { useAppContext } from "../context";
import { useFocusEffect } from "@react-navigation/native";
import { useBalance } from "../hooks";
import { ethers } from "ethers";

export const Home = ({ navigation }: any) => {
  const { wid } = useAppContext();
  const { getNativeBalance } = useBalance()

  const [balance, setBalance] = useState('$500')

  useFocusEffect(
    useCallback(() => {
      if(wid) {
        getNativeBalance(wid.address, "137")
          .then(res => {
            // console.log(res)
            setBalance(ethers.utils.formatEther(res.balance).toString())
          }).catch(e => console.log(e))
      }
    }, [wid])
  )

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#000",
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: "#000" }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 17,
              paddingTop: 20,
              justifyContent: "space-between",
            }}
          >
            <View>
              <LinearGradient
                colors={["#4B74FF", "#9281FF"]}
                style={styles.avatar}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text
                  style={{ fontSize: 15, color: "#ffffff", fontWeight: "bold" }}
                >
                  {wid?.wagpay_id.slice(0, 1)}
                </Text>
              </LinearGradient>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Scanner");
                }}
              >
                <MaterialCommunityIcons
                  name="line-scan"
                  color={"#ffffff"}
                  size={25}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center", marginTop: 44 }}>
            <Text style={{ fontSize: 42, fontWeight: "600", color: "#fff" }}>
              {balance.substring(0, 5)} MATIC
            </Text>
            <View style={styles.shadow}></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 16,
              justifyContent: "space-between",
              marginBottom: 36,
              marginTop: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Send");
              }}
            >
              <LinearGradient
                colors={["#4B74FF", "#9281FF"]}
                style={styles.button1}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Feather name="arrow-up-right" size={18} color={"#fff"} />
                <Text style={styles.buttonText}>Send</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Recive");
              }}
              style={{
                marginHorizontal: 10,
                flexGrow: 1,
              }}
            >
              <LinearGradient
                style={{
                  padding: 1,
                  borderRadius: SIZES.small,
                  width: "100%",
                }}
                colors={["#4B74FF", "#A560FF80"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <View
                  style={{
                    height: 54,
                    width: 190,
                    backgroundColor: "#000",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: SIZES.small,
                    flexDirection: "row",
                    padding: 1,
                  }}
                >
                  <Feather name="arrow-down-left" size={18} color={"#fff"} />
                  <Text style={styles.buttonText}>Receive</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 16 }}>
            {/* payment request */}
            <Paymentrequest navigation={navigation}></Paymentrequest>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#FFFFFF",
                  fontWeight: "600",
                  lineHeight: 22.5,
                }}
              >
                Assets
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#959595",
                    fontWeight: "500",
                    lineHeight: 20,
                  }}
                >
                  view all
                </Text>
              </TouchableOpacity>
            </View>
            <AssetContainer />
            <AssetContainer />
            <AssetContainer />
            <AssetContainer />
            <AssetContainer />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    shadowOpacity: 0.99,
    shadowColor: "#D9D9D9",
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
    backgroundColor: "#D9D9D9",
    width: 223,
    height: 3,
  },
  button1: {
    height: 56,
    width: 160,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginLeft: 8,
  },
});
