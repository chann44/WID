import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import { useAppContext } from "../context";

export const UserRegistration = ({ navigation }: any) => {
  const [username, setUserName] = useState("");
  const { userWalletInfo } = useAppContext();

  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.headerText}>Create account</Text>
      </View>
      <View style={{ marginTop: 36 }}>
        <View>
          <Text style={styles.inputHeader}>First name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter first name"
              placeholderTextColor={"#636363"}
              style={styles.textInputS}
              keyboardType="default"
              onChangeText={(text) => {
                console.log(text);
              }}
            />
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.inputHeader}>Last name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter last name"
              placeholderTextColor={"#636363"}
              style={styles.textInputS}
            />
          </View>
        </View>
        <View>
          <Text style={styles.inputHeader}>Username</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="username@wagpay"
              placeholderTextColor={"#636363"}
              style={styles.textInputS}
              onChangeText={(text) => {
                console.log(text);
              }}
            />
          </View>
          <Text
            style={{
              color: "#ABABAB",
              lineHeight: 18,
              marginTop: 4,
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            *You can not change your username later.
          </Text>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 38, width: "100%" }}>
        <Button
          title={"Next"}
          onPress={() => {
            navigation.navigate("createAccountSuccess");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#000000",
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 17,
    alignItems: "center",
    paddingBottom: 38,
  },

  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    lineHeight: 22.5,
  },
  inputContainer: {
    marginTop: 4,
    height: 56,
    width: 357,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#3A3A3A",
  },
  inputHeader: {
    color: "#FFFFFF",
    lineHeight: 23,
    fontSize: 18,
    fontWeight: "500",
  },
  textInputS: {
    paddingVertical: 14,
    paddingHorizontal: 15,
    fontSize: 18,
    color: "#FFFFFF",
  },
});
