import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView,
} from "react-native";
import React from "react";
import Button from "../../components/Button";

const CreateWallet = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.Container}>
        <View>
          <Text style={styles.headerText}>Create Wallet</Text>
        </View>
        <View style={{ marginTop: 36 }}>
          <View>
            <Text style={styles.inputHeader}>Username</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter first name"
                placeholderTextColor={"#636363"}
                style={styles.textInputS}
                keyboardType="default"
              />

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
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.inputHeader}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={"#636363"}
                style={styles.textInputS}
              />
              <Text
                style={{
                  color: "#ABABAB",
                  lineHeight: 18,
                  marginTop: 4,
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                Best passwords and long and contain letters, numbers and special
                characters
              </Text>
            </View>
          </View>
        </View>
        <View style={{ position: "absolute", bottom: 38 }}>
          <Button
            title={"Next"}
            onPress={() => {
              navigation.navigate("ConnectWallet1");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateWallet;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#000000",
    flex: 1,
    paddingTop: 60,
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
    marginBottom: 8,
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
    marginHorizontal: 10,
    marginBottom: 5,
  },
  textInputS: {
    paddingVertical: 14,
    paddingHorizontal: 15,
    fontSize: 18,
    color: "#FFFFFF",
  },
});
