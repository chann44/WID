import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../../assets/theme";
import SVGImg from "../../../assets/done.svg";

export const CreateWalletSuccess = ({ navigation }: any) => {
  setTimeout(() => {
    navigation.navigate("UserRegistration");
  }, 3000);
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
        <SVGImg />
        <Text
          style={{
            marginTop: SIZES.extraLarge,
            fontSize: SIZES.large,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Yay!!
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: SIZES.small,
            fontSize: SIZES.large,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Wallet created Succesfully
        </Text>
      </View>
    </SafeAreaView>
  );
};
