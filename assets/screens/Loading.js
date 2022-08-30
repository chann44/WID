import { View, Text, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../theme";
import SVGImg from "../../assets/done.svg";

const Loading = ({ navigation, route }) => {
  console.log(route);

  setTimeout(() => {
    navigation.navigate(route.params.next);
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

export default Loading;
