import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "../components/Button";
import { useFocusEffect } from "@react-navigation/native";
import { useBalance, usePay } from "../hooks";
import { useAppContext } from "../context";
import { ethers } from "ethers";
import { get_provider } from "@wagpay/id/dist/utils";

export const Send = ({ navigation }: any) => {
  const { wid, userWalletInfo, scannedwid, setScannedWid } = useAppContext();
  const { getERC20Balance } = useBalance();
  const { payment } = usePay();

  const [next, setNext] = useState(false);

  // const [id, setID] = useState("");
  const [amount, setAmount] = useState("");
  const [chain, setChain] = useState("");
  const [token, setToken] = useState("");
  const [tokens, setTokens] = useState();

  const [paymentRequest, setPaymentRequest] = useState<any>({});

  const takeNext = async () => {
    await pay();

    setNext(true);
  };

  const pay = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("payment started");
        const request = await payment(
          {
            to_id: scannedwid,
            amount: amount,
          },
          {
            from_id: wid?.wagpay_id,
            from_address: wid?.address,
            from_token: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            from_chain: "2",
          }
        );

        console.log(request);
        setPaymentRequest(request);

        resolve(request);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  };

  const executePayment = async () => {
    try {
      if (userWalletInfo) {
        let signer = new ethers.Wallet(userWalletInfo.privateKey);
        const provider = ethers.getDefaultProvider(
          "https://polygon-mumbai.g.alchemy.com/v2/Tv9MYE2mD4zn3ziBLd6S94HvLLjTocju"
        );
        if (!provider) throw "Chain not supported";
        signer = signer.connect(provider);

        const tx = await signer.sendTransaction(
          paymentRequest.transaction_data
        );

        console.log(tx);

        navigation.navigate("TransectionSuccess");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => console.log(scannedwid), [scannedwid]);

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
            paddingHorizontal: 4,
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
          <Text style={styles.headerText}>Send</Text>
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
        <View
          style={{
            backgroundColor: "#111111",
            width: "100%",
            borderRadius: 8,
            alignItems: "center",
            paddingHorizontal: 8,
            paddingVertical: 12,
            marginTop: 60,
          }}
        >
          <View
            style={{
              width: "100%",
              paddingHorizontal: 16,
              backgroundColor: "#000000",
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 20,
                marginTop: 16,
                color: "#9B9B9B",
              }}
            >
              Receipent wagpay id
            </Text>
            <TextInput
              defaultValue={scannedwid}
              onChangeText={(a) => setScannedWid(a)}
              placeholder="satyam@wagpay"
              style={{
                color: "white",
                paddingVertical: 16,
                fontSize: 16,
              }}
            />
          </View>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 16,
              backgroundColor: "#000000",
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ marginVertical: 16 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "#FFFFFF",
                }}
              >
                Amount
              </Text>
              <TextInput
                defaultValue={amount}
                onChangeText={(a) => setAmount(a)}
                placeholder="--"
                placeholderTextColor={"#ffff"}
                style={{ fontSize: 18, color: "#fff", marginTop: 12 }}
                keyboardType="number-pad"
              />
            </View>
            <View
              style={{
                height: 54,
                width: 83,
                backgroundColor: "#303030",
                borderRadius: 8,
                flexDirection: "row",
                marginVertical: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "#FFFFFF",
                }}
              >
                USDC
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                color={"#fff"}
                size={25}
              />
            </View>
          </View>
          {next ? (
            <View
              style={{
                marginVertical: 10,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Gas fees
              </Text>
              <Text
                style={{
                  color: "white",
                }}
              >
                {paymentRequest && paymentRequest.transaction_data.gasLimit}
              </Text>
            </View>
          ) : null}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 40,
            alignSelf: "center",
            width: "100%",
          }}
        >
          {next ? (
            <Button title={"Send"} onPress={() => executePayment()} />
          ) : (
            <Button onPress={() => takeNext()} title={"Next"} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#000000",
    flex: 1,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
});
