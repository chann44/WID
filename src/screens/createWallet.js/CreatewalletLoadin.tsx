import { useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import "@ethersproject/shims";

import { ethers } from "ethers";
import { SIZES } from "../../../assets/theme";
import { useAppContext, UserWalletInfo } from "../../context";
import { AsyncStorage } from "react-native";

const CreateWallet = async (
  navigation: any,
  route: any,
  setUserWalletInfo: any,
  userWalletInfo: any
) => {
  const wallet = ethers.Wallet.createRandom();
  console.log("address:", wallet.address);
  console.log("mnemonic:", wallet.mnemonic.phrase);
  console.log("privateKey:", wallet.privateKey);
  const phrase = wallet.mnemonic.phrase;
  const address = wallet.address;
  const privatekey = wallet.privateKey;
  setUserWalletInfo((prev: any) => {
    return {
      ...prev,
      address: address,
      privateKey: privatekey,
      seedPhrase: phrase,
    };
  });
  navigation.navigate(route.params.next);
};

const importWallet = async (
  seedPhrase: string,
  navigation: any,
  route: any,
  setUserWalletInfo: any
) => {
  const wallet = ethers.Wallet.fromMnemonic(seedPhrase);
  const phrase = wallet.mnemonic.phrase;
  const address = wallet.address;
  const privatekey = wallet.privateKey;
  setUserWalletInfo((prev: any) => {
    return {
      ...prev,
      address: address,
      privateKey: privatekey,
      seedPhrase: phrase,
    };
  });
  navigation.navigate(route.params.next);
};

export const CreateWalletLoading = ({ navigation, route }: any) => {
  const { userWalletInfo, setUserWalletInfo, importSeedPhrase } =
    useAppContext();

  useEffect(() => {
    if (route.params.importwallet) {
      console.log("importing");
      importWallet(importSeedPhrase, navigation, route, setUserWalletInfo);
    } else {
      CreateWallet(navigation, route, setUserWalletInfo, userWalletInfo);
    }
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
