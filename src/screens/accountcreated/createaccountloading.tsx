import { useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import "@ethersproject/shims";

import { ethers } from "ethers";
import { SIZES } from "../../../assets/theme";
import { useAppContext, UserWalletInfo } from "../../context";
import { AsyncStorage } from "react-native";
import { useID } from "../../hooks/useID";
import { _storeData } from "../createWallet.js/createWalletSuccess";

const CreateID = async (
  navigation: any,
  route: any,
  userWalletInfo: any,
  username: string,
  setWid: any,
  setUserWalletInfo: any
) => {
  const wallet =
    userWalletInfo &&
    (await ethers.Wallet.fromMnemonic(userWalletInfo?.seedPhrase));
  const msg = wallet && (await wallet.signMessage("wagpay did this"));
  console.log(msg);
  const { createId } = useID();

  createId({
    wagpay_id: `${username}@wagpay`,
    default: {
      address: userWalletInfo?.address,
      network: {
        id: 2,
        name: "polygon",
        chain_type: "evm",
      },
    },
    others: [
      {
        address: "0x444A900d6CC95F8d4568cB6e3096f218B9606294",
        network: [
          {
            id: 1,
            name: "ethereum",
            chain_type: "evm",
          },
          {
            id: 2,
            name: "polygon",
            chain_type: "evm",
          },
        ],
      },
    ],
    forced_same_chain_payment: false,
    signedMsg: msg, // signed message from default address
  })
    .then((res: any) => {
      console.log(res);
      setWid((prev: any) => {
        return {
          ...prev,
          id: res.id,
          address: res.default.address,
          wagpay_id: res.wagpay_id,
          provider: res.provider,
          owner: res.owner,
          phone_number: res.phone_number,
        };
      });
      setUserWalletInfo((prev: any) => {
        return {
          ...prev,
          id: res.wagpay_id,
        };
      });
      navigation.navigate(route.params.next);
    })
    .catch((e: any) => console.error(e));
};

export const CreateAccountLoading = ({ navigation, route }: any) => {
  const {
    userWalletInfo,
    setUserWalletInfo,
    importSeedPhrase,
    username,
    setWid,
  } = useAppContext();

  useEffect(() => {
    CreateID(
      navigation,
      route,
      userWalletInfo,
      username,
      setWid,
      setUserWalletInfo
    );
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
          wait....
        </Text>
      </View>
    </SafeAreaView>
  );
};
