import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "../components/Button";
import { SIZES } from "../../assets/theme";

const ShowSeedPhrase = ({ navigation }: any) => {
  const [showNext, setShowNext] = useState(false);

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
            <Text style={styles.headerText}>Create wallet</Text>
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
              paddingHorizontal: 8,
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
                  fontSize: SIZES.large,
                  fontWeight: "500",
                  lineHeight: 20,
                  marginTop: 16,
                  marginBottom: 12,
                  color: "#fff",
                }}
              >
                Copy and store this Secret recovery phrase
              </Text>
              <TextInput
                multiline={true}
                value="this a seedphrase that you need to know you know that "
                numberOfLines={4}
                style={{
                  justifyContent: "flex-start",
                  width: "100%",
                  paddingVertical: 12,
                  paddingHorizontal: 20,
                  backgroundColor: "#000000",
                  borderRadius: 8,
                  color: "#fff",
                }}
                placeholder="Enter your secret recovery phrase"
                placeholderTextColor="#777E90"
              />
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
                  navigation.navigate("EnterSeedPhrase");
                }}
              />
            ) : (
              <Button
                title={"copy"}
                onPress={() => {
                  setShowNext(true);
                }}
              />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShowSeedPhrase;

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
