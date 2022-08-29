import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from "../theme";

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
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: SIZES.medium,
          }}
        >
          Payment Request from <Text>vikash@wagapay</Text>
        </Text>
        <View
          style={{
            marginVertical: 8,
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
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              marginHorizontal: 3,
              flexGrow: 1,
              height: 50,
              borderColor: "#9281FF",
              borderWidth: 1,
              borderColor: "white",
              borderStyle: "solid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.large,
                color: "white",
                lineHeight: 22.5,
              }}
            >
              pay
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 6,
              flexGrow: 1,
              borderWidth: 1,
              borderColor: "white",
              borderStyle: "solid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.large,
                color: "white",
              }}
            >
              cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Paymentrequest;
