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
import { useBalance } from "../hooks";
import { useAppContext } from "../context";

export const Send = ({ navigation }: any) => {
  const { wid } = useAppContext();
  const { getERC20Balance } = useBalance()

  const [next, setNext] = useState(false);

  const [id, setID] = useState('')
  const [amount, setAmount] = useState('')
  const [chain, setChain] = useState('')
  const [token, setToken] = useState('')

  const [tokens, setTokens] = useState()

  useEffect(() => console.log(id), [id])

  useFocusEffect(
    useCallback(() => {
      console.log("dsa", wid)
      if(wid?.address) {
        getERC20Balance(wid.address, '0x89').then((res) => {
          console.log(res)
        })
      }
    }, [wid])
  )

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
          <TouchableOpacity>
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
              defaultValue={id}
              onChangeText={a => setID(a)}
              placeholder="satyam@wagpay" 
              style={{
                color: 'white',
                paddingVertical: 16,
                fontSize: 16
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
                onChangeText={a => setAmount(a)}
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
                $0.04
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
            <Button
              title={"Send"}
              onPress={() => {
                navigation.navigate("TransectionSuccess");
              }}
            />
          ) : (
            <Button
              onPress={() => {
                setNext(true);
              }}
              title={"Next"}
            />
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
