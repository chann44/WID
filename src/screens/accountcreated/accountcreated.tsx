import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../../assets/theme";
import SVGImage from "../../../assets/done.svg";

export const AccoundCreated = ({ navigation }: any) => {
  setTimeout(() => {
    navigation.navigate("ConnectWallet1");
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
        <SVGImage />
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
          Account created Succesfully
        </Text>
      </View>
    </SafeAreaView>
  );
};
