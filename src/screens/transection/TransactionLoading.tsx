import { useEffect } from "react";
import { View, Text, Image, ActivityIndicator, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import "@ethersproject/shims";

import { BigNumber, ethers } from "ethers";
import { SIZES } from "../../../assets/theme";
import { useAppContext, UserWalletInfo } from "../../context";
import { AsyncStorage } from "react-native";
import { _storeData } from "../createWallet.js/createWalletSuccess";
import { get_provider, is_native_token } from "@wagpay/id/dist/utils";

const ExecutePayment = async (
  navigation: any,
  route: any,
  userWalletInfo: any,
  selectedChain: any,
  paymentRequest: any,
  token: any
) => {
  try {
    if (userWalletInfo) {
      let signer = new ethers.Wallet(userWalletInfo.privateKey);
      const provider = get_provider(
        selectedChain?.internalId.toString() as string,
        "y141okG6TC3PecBM1mL0BfST9f4WQmLx"
      );
      if (!provider) throw "Chain not supported";
      signer = signer.connect(provider);

      console.log(await (await signer.getBalance()).toString());

      if (!is_native_token(token?.address.toLowerCase() as string, "evm")) {
        const erc20 = new ethers.Contract(
          token.address,
          [
            "function approve(address _spender, uint256 _value) public returns (bool success)",
          ],
          signer
        );
        console.log(paymentRequest.transaction_data.to, paymentRequest.amount);
        const tx = await erc20.approve(
          paymentRequest.transaction_data.to,
          ethers.utils
            .parseUnits(paymentRequest.amount, token.decimals)
            .toString(),
          {
            gasPrice: provider.getGasPrice(),
            gasLimit: BigNumber.from(1500000),
          }
        );

        console.log(tx, "erc20");

        await tx.wait();
      }
      const { gasLimit, chainId, from, value, ...request } =
        paymentRequest.transaction_data;
      const tx = await signer.sendTransaction(paymentRequest.transaction_data);
      console.log({
        tx: tx.hash,
        config: paymentRequest,
        chain: selectedChain,
        token: token,
      });
      console.log(tx, "bridge");
      navigation.navigate("txdetails", {
        tx: tx.hash,
        config: paymentRequest,
        chain: selectedChain,
        token: token,
      });
    }
  } catch (e) {
    navigation.navigate("Send");
    console.log(e);
  }
};

export const TransactionLoading = ({ navigation, route }: any) => {
  const {
    userWalletInfo,
    setUserWalletInfo,
    importSeedPhrase,
    username,
    setWid,
  } = useAppContext();

  useEffect(() => {
    ExecutePayment(
      navigation,
      route,
      userWalletInfo,
      route.params.selectedChain,
      route.params.paymentRequest,
      route.params.token
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
          Loading Transaction
        </Text>
      </View>
    </SafeAreaView>
  );
};
