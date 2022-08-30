import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SIZES } from "../theme";
import { LinearGradient } from "expo-linear-gradient";

const Paymentrequest = () => {
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
            style={{
              flexGrow: 1,
              marginHorizontal: 3,
            }}
            onPress={() => {
              navigation.navigate("Onboarding2");
            }}
          >
            <LinearGradient
              style={{
                paddingVertical: 10,
              }}
              colors={["#4B74FF", "#9281FF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: SIZES.large,
                  textAlign: "center",
                }}
              >
                Pay
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 3,
              flexGrow: 1,
            }}
          >
            <LinearGradient
              style={{
                padding: 1,

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
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Paymentrequest;
