import {
  ScrollViewComponent,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import RequestPayment from "./recivepayment/RequestPayment";
import Carousel from "react-native-snap-carousel";
import { getId } from "../hooks";

export interface Request {
  amount: number;
  chainID: number;
  created_at: string;
  data: string;
  executed: boolean;
  from_id: string;
  id: number;
  message: string;
  token: string;
  transection_hash: string;
}

export const Home = ({ navigation, route }: any) => {
  const { wid, chain } = useAppContext();
  const { getNativeBalance, getERC20Balance } = useBalance();

  const [requests, setRequests] = useState<Request[] | []>([]);

  const [balance, setBalance] = useState("0.00");
  const [erc20Balances, setERC20Balances] = useState<any[]>([])

  useFocusEffect(
    useCallback(() => {
      if (wid) {
        getNativeBalance(wid.address, chain?.chainId.toString() as string)
          .then((res) => {
            // console.log(res)
            setBalance(ethers.utils.formatEther(res.balance).toString());
          })
          .catch((e) => console.log(e));
        
        getERC20Balance(wid.address, chain?.chainId.toString() as string)
          .then(res => {
            setERC20Balances(res)
          })
          .catch((e) => {
            console.error(e)
          })
      }
    }, [wid, chain])
  );

  useEffect(() => {
    (async () => {
      try {
        console.log(wid?.wagpay_id);
        const data: any = await getId({ id: "satyamxx@wagpay" });
        setRequests(data.requests);
      } catch (E) {
        console.log(E);
      }
    })();
  }, []);

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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
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
                    style={{
                      fontSize: 15,
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  >
                    {wid?.wagpay_id.slice(0, 1)}
                  </Text>
                </LinearGradient>
              </View>
            </TouchableOpacity>
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
              {balance.substring(0, 5)} {chain?.nativeCurrency.symbol}
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
            {/* <Text
              style={{
                fontSize: 18,
                color: "#FFFFFF",
                fontWeight: "600",
                lineHeight: 22.5,
              }}
            >
              Payment Requests
            </Text> */}
            {/* <Carousel
              data={requests}
              renderItem={(item: any) => {
                return (
                  <Paymentrequest
                    naivgation={navigation}
                    route={route}
                    request={item}
                  ></Paymentrequest>
                );
              }}
              itemHeight={120}
              sliderWidth={360}
              itemWidth={360}
              apparitionDelay={1}
              sliderHeight={120}
            /> */}
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
            {erc20Balances.map(erc20 => (
              <AssetContainer token={erc20} />
            ))}
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
