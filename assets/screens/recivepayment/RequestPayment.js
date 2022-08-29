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
import { SIZES } from "../../theme";
import DropDownPicker from "react-native-dropdown-picker";

const RequestPayment = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Polygon", value: "Polygon" },
    { label: "Etherium", value: "Etherium" },
  ]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000000",
        flex: 1,
        width: "100%",
        paddingTop: 40,
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
          <TouchableOpacity>
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
              <DropDownPicker
                style={{
                  backgroundColor: "#000",
                }}
                theme="DARK"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
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

                  <View
                    style={{
                      height: 34,
                      width: 83,
                      backgroundColor: "#303030",
                      borderRadius: 8,
                      flexDirection: "row",
                      marginVertical: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "500",
                        lineHeight: 12,
                        color: "#FFFFFF",
                      }}
                    >
                      USDC
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-down"
                      color={"#fff"}
                      size={18}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 40,
              alignItems: "center",
            }}
          >
            <Button title={"Request payment"} />
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
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
});
