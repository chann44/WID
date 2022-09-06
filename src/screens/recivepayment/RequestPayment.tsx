import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "../../components/Button";
import DropDownPicker from "react-native-dropdown-picker";
import { SIZES } from "../../../assets/theme";
import { DropDown } from "../../components/DropDown";

const RequestPayment = ({ navigation, name }: any) => {
  console.log(name);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Polygon", value: "Polygon" },
    { label: "Etherium", value: "Etherium" },
  ]);
  const [coin, setCoin] = useState("USDC");
  const [chain, setChain] = useState("Polygon");
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#000000",
        flex: 1,
        width: "100%",
        paddingVertical: 40,
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
            style={{
              marginRight: "33%",
            }}
            onPress={() => {
              navigation.navigate("Recive");
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
            <Text style={styles.headerText}>Recive</Text>
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
                Sender's wagpay id
              </Text>
              <TextInput
                style={{
                  width: "100%",
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  backgroundColor: "#000000",
                  borderRadius: 8,
                }}
                placeholder="vikash@wagpay"
                placeholderTextColor="#777E90"
              />
            </View>
            <View
              style={{
                position: "relative",
                zIndex: 50,
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
                Select chain
              </Text>
              <DropDown
                setValue={setChain}
                value={chain}
                textColor="white"
                bgcolor="#000"
                items={[
                  { key: "Etherium", value: "Etherium" },
                  { key: "Polygon", value: "polygon" },
                ]}
              />
            </View>
            <View
              style={{
                width: "100%",
                paddingHorizontal: 16,
                borderRadius: 8,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "#FFFFFF",
                }}
              >
                Amount
              </Text>
              <View style={{ marginVertical: 16, backgroundColor: "#000" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TextInput
                    placeholder="$00"
                    placeholderTextColor={"#777E90"}
                    style={{ fontSize: 18, color: "#fff" }}
                    keyboardType="number-pad"
                  />

                  <DropDown
                    bgcolor="#303030"
                    setValue={setCoin}
                    value={coin}
                    textColor="white"
                    items={[
                      {
                        key: "USDC",
                        value: "USDC",
                      },
                      {
                        key: "Matic",
                        value: "Matic",
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 40,
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button
              title={"Request payment"}
              onPress={() => {
                navigation.navigate("Loading", {
                  meesage: "Sending payment request",
                  next: "TabNavigation",
                });
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RequestPayment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
});
