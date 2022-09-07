import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "../../components/Button";
import "@ethersproject/shims";

import { ethers } from "ethers";
import { SIZES } from "../../../assets/theme";
import { useAppContext } from "../../context";

const ImportWallet = ({ navigation }: any) => {
  const { setImportSeedPhrase, importSeedPhrase } = useAppContext();
  const [error, setErro] = useState(false);
  useEffect(() => {
    if (importSeedPhrase.split(" ").length! == 12) {
      setErro(true);
    }
  }, [importSeedPhrase]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000000",
        width: "100%",
        paddingTop: 40,
        paddingBottom: 12,
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
              navigation.navigate("CreateWalletOnBoarding");
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
            <Text style={styles.headerText}>Import Wallet</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              backgroundColor: "#111111",
              width: "100%",
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 8,
              paddingVertical: 12,
              marginTop: 60,
            }}
          >
            <View
              style={{
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
                  color: "#fff",
                }}
              >
                Secret recovery phrase
              </Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => {
                  setImportSeedPhrase(text);
                }}
                style={{
                  justifyContent: "flex-start",
                  width: "100%",
                  paddingVertical: 12,
                  backgroundColor: "#000000",
                  borderRadius: 8,
                }}
                placeholder="Enter your secret recovery phrase"
                placeholderTextColor="#777E90"
              />

              {error && (
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "200",
                    lineHeight: 20,
                    marginTop: 16,
                    marginBottom: 12,
                    color: "red",
                  }}
                >
                  *Incorrect letter please crosscheck your seedphrase before
                  entering
                </Text>
              )}
            </View>
          </View>
          <View
            style={{
              width: "100%",
              marginHorizontal: 40,
              alignItems: "center",
            }}
          >
            <Button
              title={"import wallets"}
              onPress={() => {
                navigation.navigate("CreateWalletLoading", {
                  importwallet: true,
                  meesage: "Importing wallet",
                  next: "CreateWalletOnSuccess",
                });
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ImportWallet;

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
