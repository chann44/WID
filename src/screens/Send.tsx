import {
  ActivityIndicator,
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
import { useBalance, useID, usePay } from "../hooks";
import { useAppContext } from "../context";
import { BigNumber, ethers } from "ethers";
import { find_recipient, get_provider, is_native_token } from "@wagpay/id/dist/utils";
import { SIZES } from "../../assets/theme";
import { DropDown } from "../components/DropDown";
import { chainData, getChain, getToken } from "fetcch-chain-data";
import { tokens as tokenData } from "fetcch-chain-data/dist/tokens";
import { get_id } from "@wagpay/id";

export const Send = ({ navigation }: any) => {
  const { wid, userWalletInfo, scannedwid, setScannedWid, chain } =
    useAppContext();
  const { getERC20Balance } = useBalance();
  const { payment } = usePay();
  const { getId } = useID()

  const [next, setNext] = useState(false);

  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedChain, setSelectedChain] = useState(chain);
  const [token, setToken] = useState(
    tokenData["2"].find((t: any) => t.symbol === "USDC")
  );
  const [tokens, setTokens] = useState(
    getERC20Balance(
      wid?.address as string,
      chain?.internalId.toString() as string
    )
  );
  const [loading, setLoading] = useState(false);

  const [paymentRequest, setPaymentRequest] = useState<any>({});

  const takeNext = async () => {
    setLoading(true);
    await pay();
    setLoading(false);
    setNext(true);
  };

  const pay = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(
          "payment started",
          {
            to_id: scannedwid,
            amount: amount,
          },
          {
            from_id: wid?.wagpay_id,
            from_address: wid?.address,
            from_token: token?.address.toLowerCase(),
            from_chain: selectedChain?.internalId.toString(),
          }
        );
        const request = await payment(
          {
            to_id: scannedwid,
            amount: ethers.utils.parseUnits(amount, token.decimals).toString(),
          },
          {
            from_id: wid?.wagpay_id,
            from_address: wid?.address,
            from_token: token?.address.toLowerCase(),
            from_chain: selectedChain?.internalId.toString(),
          }
        );

        console.log(request.transaction_data);
        setPaymentRequest(request);

        resolve(request);
      } catch (e) {
        setNext(false);
        setLoading(false);
        console.log(e);
        reject(e);
      }
    });
  };

  const executePayment = async () => {
    setLoading(true);
    try {
      if (userWalletInfo) {
        let signer = new ethers.Wallet(userWalletInfo.privateKey);
        const provider = get_provider(selectedChain?.internalId.toString() as string, "y141okG6TC3PecBM1mL0BfST9f4WQmLx")
        if (!provider) throw "Chain not supported";
        signer = signer.connect(provider);
        
        if(!is_native_token(token?.address.toLowerCase() as string, "evm")) {
          const erc20 = new ethers.Contract(token.address, [
            "function approve(address _spender, uint256 _value) public returns (bool success)",
          ], signer)
          console.log(paymentRequest.transaction_data.to, ethers.utils.parseUnits(amount, token.decimals).toString())
          const tx = await erc20.approve(paymentRequest.transaction_data.to, ethers.utils.parseUnits(amount, token.decimals).toString(), {
            gasPrice: provider.getGasPrice(),
            gasLimit: BigNumber.from(1500000)
          })

          await tx.wait()
        }

        const tx = await signer.sendTransaction(paymentRequest);

        console.log(tx);
        setLoading(false);
        navigation.navigate("TransectionSuccess", { tx: tx.hash });
      }
    } catch (e) {
      setNext(false);
      setLoading(false);
      console.log(e);
    }
  };

  const updateChain = (cD: string) => {
    const c = chainData.find((c) => c.name === cD);

    if (!c) return;

    const chain = getChain({ internalId: c.internalId });

    setSelectedChain(chain);
  };

  const updateToken = (t: string) => {
    const tokens = tokenData[selectedChain?.internalId.toString() as string];

    const tk = tokens.find((tkK: any) => tkK.name === t);

    if (!tk) return;
    console.log(tk);
    setToken(tk);
  };

  useEffect(() => {
    (async () => {
      console.log("alpaca", scannedwid)
      if(scannedwid) {
        const id = await getId({ id: scannedwid })
        if(id) {
          console.log(id)
          setAddress(id.default.address)
        }
      }
    })()
  }, [scannedwid])

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
            <Text
              style={{
                fontSize: 10,
                fontWeight: "500",
                lineHeight: 20,
                marginTop: 16,
                color: "#9B9B9B",
              }}
            >{address}</Text>
          </View>
          <View
            style={{
              position: "relative",
              zIndex: 50,
              marginBottom: 10,
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.large,
                fontWeight: "500",
                lineHeight: 20,
                marginTop: 16,
                marginBottom: 12,
                color: "white",
              }}
            >
              Select chain
            </Text>
            <DropDown
              setValue={(e) => updateChain(e.toString())}
              value={selectedChain ? selectedChain.name : ""}
              textColor="white"
              bgcolor="#000"
              items={chainData.map((c) => {
                return { key: c.internalId.toString(), value: c.name };
              })}
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
              <DropDown
                bgcolor="#303030"
                setValue={(e) => updateToken(e.toString())}
                value={token ? token.name : ""}
                textColor="white"
                items={tokenData[
                  selectedChain?.internalId.toString() as string
                ].map((t: any) => {
                  return { key: t.address, value: t.name };
                })}
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
                {paymentRequest &&
                typeof paymentRequest.transaction_data.gasLimit === "object"
                  ? parseInt(paymentRequest.transaction_data.gasLimit.hex)
                  : paymentRequest.transaction_data.gasLimit}
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
            <Button title={
              loading ? <ActivityIndicator size={20} color="white" /> : "Send"
            } onPress={() => executePayment()} />
          ) : (
            <Button onPress={() => takeNext()} title={
              loading ? <ActivityIndicator size={20} color="white" /> : "Next"
            } />
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
