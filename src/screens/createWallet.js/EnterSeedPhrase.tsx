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
import { SIZES } from "../../../assets/theme";
import { useAppContext } from "../../context";

const EnterSeedPhrase = ({ navigation, route }: any) => {
  const { userWalletInfo } = useAppContext();
  const [val, setVal] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    console.log(userWalletInfo?.seedPhrase.split(" ")[5]);
    console.log(val);
    console.log(showError);
    if (val === userWalletInfo?.seedPhrase.split(" ")[5]) {
      setShowNext(true);
      setShowError(false);
    } else if (val !== "" && val !== userWalletInfo?.seedPhrase.split(" ")[5]) {
      setShowError(true);
    }
  }, [val]);

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
            <Text style={styles.headerText}>Enter seedphraset</Text>
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
              paddingHorizontal: 3,
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
                  fontSize: 16,
                  fontWeight: "200",
                  lineHeight: 20,
                  marginTop: 16,
                  marginBottom: 12,
                  color: "#fff",
                }}
              >
                What is the 6th letter of your secret phrase?
              </Text>
              <TextInput
                keyboardType="ascii-capable"
                multiline={true}
                onChangeText={(text) => {
                  setVal(text);
                }}
                style={{
                  justifyContent: "flex-start",
                  fontSize: 16,
                  width: "100%",
                  color: "#fff",
                  paddingVertical: 12,
                  backgroundColor: "#000000",
                  borderRadius: 8,
                  paddingHorizontal: 6,
                }}
                placeholder="Enter here"
                placeholderTextColor="#777E90"
              />
              {showError && (
                <Text
                  style={{
                    fontSize: 12,
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
            {showNext ? (
              <Button
                title={"Next"}
                onPress={() => {
                  navigation.navigate("CreateWalletOnSuccess");
                }}
              />
            ) : null}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterSeedPhrase;

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
