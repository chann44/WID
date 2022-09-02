import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgUri } from "react-native-svg";
import { SIZES } from "../../assets/theme";
import SVGImg from "../../assets/tryagain.svg";

const TryAgain = () => {
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
            paddingHorizontal: 50,
          }}
        >
          There was a problem in creating account try again
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: "100%",
            borderColor: "white",
            marginTop: SIZES.extraLarge,
            borderRadius: SIZES.small,
            paddingVertical: 12,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: SIZES.large,
              textAlign: "center",
              color: "white",
            }}
          >
            try again
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
