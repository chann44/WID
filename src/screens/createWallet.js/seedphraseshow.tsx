import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useAppContext } from "../../context";
import { SIZES } from "../../../assets/theme";
import Button from "../../components/Button";

const ShowSeedPhrase = ({ navigation }: any) => {
  const [showNext, setShowNext] = useState(false);
  const { userWalletInfo } = useAppContext();

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
              size={30}
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
              width: "100%",
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 8,
              paddingVertical: 10,
              marginTop: 60,
            }}
          >
            <View
              style={{
                marginBottom: 10,
                width: "100%",
                borderWidth: 1,
                borderColor: "#FCA311",
              }}
            >
              <Text
                style={{
                  color: "#FF9E00",
                  fontSize: SIZES.large,
                  padding: 5,
                  textAlign: "center",
                }}
              >
                Don’t share your secret phrase!!
              </Text>
              <Text
                style={{
                  color: "#FF9E00",
                  textAlign: "center",
                  padding: 5,
                }}
              >
                If someone has your secret phrase they will have full control
                over your wallet
              </Text>
            </View>
            <View
              style={{
                margin: "auto",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {userWalletInfo?.seedPhrase
                .split(" ")
                .map((item: string, index: number) => {
                  return (
                    <View
                      key={index}
                      style={{
                        width: "30%",
                        marginHorizontal: 4,
                        marginVertical: 12,
                        borderWidth: 1,
                        padding: 12,
                        backgroundColor: "#121212",
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 12,
                          color: "white",
                        }}
                      >
                        {index + 1}, {item}
                      </Text>
                    </View>
                  );
                })}
            </View>
          </View>
          <View
            style={{
              width: "100%",
              marginHorizontal: 40,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Recive");
              }}
              style={{
                // marginHorizontal: 10,
                // flexGrow: 1,
                width: "100%",
              }}
            >
              <LinearGradient
                style={styles.button1}
                colors={["#4B74FF", "#A560FF80"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <View
                  style={{
                    height: 54,
                    width: "100%",
                    backgroundColor: "#000",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: SIZES.small,
                    flexDirection: "row",
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "TTInterfaces",
                      ...styles.buttonText,
                    }}
                  >
                    Click here to download secret phrase
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <Button
              title={"Next"}
              onPress={() => {
                navigation.navigate("EnterSeedPhrase");
              }}
            />
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
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    shadowOpacity: 0.99,
    shadowColor: "#D9D9D9",
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
    backgroundColor: "#D9D9D9",
    width: 223,
    height: 3,
  },
  button1: {
    height: 56,
    width: "100%",
    marginBottom: 12,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginLeft: 8,
  },
});
