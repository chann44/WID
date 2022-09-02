import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../assets/theme";

export const Profile = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        width: "100%",
        backgroundColor: "#000",
        paddingHorizontal: 8,
        paddingVertical: SIZES.extraLarge,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 4,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              color={"#fff"}
              size={25}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            padding: 12,
            flex: 1,
          }}
        >
          <View>
            <View
              style={{
                marginTop: 80,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 15,
                paddingHorizontal: 18,
                width: "100%",
                borderWidth: 1,
                borderColor: "#374151",
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Vikash@wagpay
              </Text>
              <MaterialIcons name="content-copy" color="#fff" size={20} />
            </View>
            <Text
              style={{
                fontSize: SIZES.large,
                marginVertical: 4,
                textAlign: "center",
                color: "#374151",
              }}
            >
              0x1238030489
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#374151",
                padding: 12,
                alignItems: "center",
                borderRadius: SIZES.large,
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.large,
                  color: "white",
                }}
              >
                show secret recovery phrase
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 12,
                borderRadius: SIZES.large,
                backgroundColor: "red",
                padding: 12,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.large,
                  color: "white",
                }}
              >
                Remove Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#000000",
    flex: 1,
  },
  headerText: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
});
