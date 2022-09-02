import { useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import "@ethersproject/shims";

import { ethers } from "ethers";
import { SIZES } from "../../../assets/theme";

const CreateWallet = async (navigation: any, route: any) => {
  const wallet = ethers.Wallet.createRandom();
  console.log("address:", wallet.address);
  console.log("mnemonic:", wallet.mnemonic.phrase);
  console.log("privateKey:", wallet.privateKey);
  navigation.navigate(route.params.next);
};

export const CreateWalletLoading = ({ navigation, route }: any) => {
  useEffect(() => {
    CreateWallet(navigation, route);
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#000",
        paddingHorizontal: 8,
        paddingVertical: SIZES.extraLarge,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={70} color="#fff" />

        <Text
          style={{
            textAlign: "center",
            marginTop: SIZES.small,
            fontSize: SIZES.large,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {route.params.meesage}
        </Text>
      </View>
    </SafeAreaView>
  );
};
