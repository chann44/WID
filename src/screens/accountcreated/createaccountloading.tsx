import { useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createId, getId } from "@fetcch/id";
import "@ethersproject/shims";

import { ethers } from "ethers";
import { SIZES } from "../../../assets/theme";
import { useAppContext, UserWalletInfo } from "../../context";
import { AsyncStorage } from "react-native";
import { _storeData } from "../createWallet.js/createWalletSuccess";
import axios from "axios";

import Constants from "expo-constants";
import { API_KEY } from "../../hooks";

const { manifest } = Constants;

const CreateID = async (
  navigation: any,
  route: any,
  userWalletInfo: any,
  username: string,
  setWid: any,
  setUserWalletInfo: any
) => {
  const wallet =
    userWalletInfo && new ethers.Wallet(userWalletInfo?.privateKey);
  const msg = wallet && (await wallet.signMessage("wagpay did this"));
  console.log(msg);

  console.log({
    wagpay_id: `${username}@fetcchx`,
    default: {
      address: userWalletInfo?.address,
      network: {
        id: 7,
        name: "polygon",
        chain_type: "evm",
      },
    },
    forced_same_chain_payment: false,
    signedMsg: msg, // signed message from default address
  });

  axios({
    method: "POST",
    url: `http://${manifest?.debuggerHost?.split(":").shift()}:8000/v1/id/`,
    data: {
      wagpayId: `${username}@fetcchx`,
      default: {
        address: userWalletInfo.address,
        network: 7,
      },
      signedMsg: msg,
      assumeHighSecurity: false,
      others: [],
    },
    headers: {
      "x-api-key": API_KEY,
    },
  })
    .then((data) => data.data)
    .then((res: any) => {
      console.log(res);
      setWid((prev: any) => {
        return {
          ...prev,
          id: res.id,
          address: res.default.address,
          wagpay_id: res.wagpayId,
          provider: res.provider,
        };
      });
      setUserWalletInfo((prev: any) => {
        return {
          ...prev,
          id: res.wagpayId,
        };
      });
      navigation.navigate(route.params.next);
    })
    .catch((e: any) => console.error(JSON.stringify(e)));

  // createId({
  // 	apiKey: API_KEY,
  // 	data: {
  // 		wagpayId: `${username}@fetcch`,
  // 		default: {
  // 			address: userWalletInfo.address,
  // 			network: 1,
  // 		},
  // 		signedMsg: msg,
  // 		assumeHighSecurity: false,
  // 		others: [],
  // 	},
  // })
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
