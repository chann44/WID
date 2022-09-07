import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../assets/theme";
import { useAppContext } from "../context";
import { DropDown } from "../components/DropDown";
import { chainData, getChain } from "fetcch-chain-data";

export const Profile = ({ navigation }: any) => {
  const { wid, chain, setChain } = useAppContext();

  const updateChain = (cD: string) => {
    const c = chainData.find((c) => c.name === cD);

    if (!c) return;

    const chain = getChain({ internalId: c.internalId });

    setChain(chain);
  };

  return (
    <SafeAreaView
      style={{
        width: "100%",
        backgroundColor: "#000",
        paddingTop: SIZES.extraLarge,
        paddingBottom: -42,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View
            style={{
              marginTop: 50,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 37,
                marginBottom: 15,
                textAlign: "center",
                color: "white",
              }}
            >
              {wid?.wagpay_id.split("@")[0]}
            </Text>
            <View
              style={{
                marginTop: 12,
                paddingHorizontal: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 15,
                width: 300,
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

              <TouchableOpacity>
                <MaterialIcons name="content-copy" color="#fff" size={20} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 12,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 15,
                paddingHorizontal: 15,
                width: 300,
                borderWidth: 1,
                borderColor: "#374151",
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                {"0xf83bc109f36e766ce369f81c807c33bec4120270".substring(0, 6) +
                  "..."}
              </Text>

              <TouchableOpacity>
                <MaterialIcons name="content-copy" color="#fff" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: "60%",
              backgroundColor: "#2C2C2C",
              padding: 15,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              justifyContent: "space-between",
            }}
          >
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 19,
                  marginVertical: 12,
                  backgroundColor: "#1F1F1F",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  Manage wallets
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  color="#fff"
                  size={30}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  marginBottom: 5,
                }}
              >
                Change Chain
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#374151",
                  padding: 12,
                  alignItems: "center",
                  borderRadius: SIZES.large,
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.large,
                    color: "white",
                  }}
                >
                  show secret recovery phrase
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 12,
                  borderRadius: SIZES.large,
                  backgroundColor: "red",
                  padding: 12,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.large,
                    color: "white",
                  }}
                >
                  Remove Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
  },
  headerText: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },

  modal1: {
    height: 230,
    backgroundColor: "#3B5998",
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10,
  },
});
