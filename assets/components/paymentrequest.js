import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SIZES } from "../theme";
import { LinearGradient } from "expo-linear-gradient";

const Paymentrequest = ({ navigation }) => {
  return (
    <View
      style={{
        marginBottom: 8,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: "#FFFFFF",
          fontWeight: "600",
          lineHeight: 22.5,
        }}
      >
        Payment Requests
      </Text>
      <View
        style={{
          backgroundColor: "#1C1C1C",
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: SIZES.medium,
            marginBottom: 8,
          }}
        >
          Payment Request from <Text>vikash@wagapay</Text>
        </Text>
        <View
          style={{
            marginVertical: 12,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: SIZES.large,
            }}
          >
            Amount
          </Text>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: SIZES.medium,
              }}
            >
              100.000 USDC
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: SIZES.small,
                color: "#959595",
                fontWeight: "500",
              }}
            >
              on polygon mainnet
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log(navigation);
              navigation.navigate("Send");
            }}
            style={{
              marginHorizontal: 10,
              flexGrow: 1,
            }}
          >
            <LinearGradient
              style={{
                padding: 1,

                borderRadius: SIZES.small,
                width: "100%",
              }}
              colors={["#4B74FF", "#A560FF80"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View
                style={{
                  paddingVertical: 10,
                  backgroundColor: "#000",
                  justifyContent: "center",
                  alignItems: "center",

                  borderRadius: SIZES.small,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: SIZES.large,
                    textAlign: "center",
                  }}
                >
                  pay
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginHorizontal: 3,
              flexGrow: 1,
              borderWidth: 1,
              borderColor: "#959595",
              borderRadius: SIZES.small,
            }}
          >
            <View
              style={{
                paddingVertical: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: SIZES.large,
                  textAlign: "center",
                }}
              >
                Cancel
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Paymentrequest;
