import { View, Text, Image } from "react-native";
import React from "react";
import { SIZES } from "../../assets/theme";
import USDCCOIN from "../../assets/USDCicon.png";
export function Transection() {
  return (
    <View
      style={{
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 3,
        borderBottomColor: "#353945",
      }}
    >
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.large,
            color: "white",
            padding: 4,
            alignItems: "center",
            paddingHorizontal: 8,
            backgroundColor: "#3772FF",
          }}
        >
          Withdraw
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={USDCCOIN} style={{ height: 32, width: 32 }} />
          <Text
            style={{
              marginLeft: 5,
              color: "white",
              fontSize: SIZES.large,
            }}
          >
            USDC
          </Text>
        </View>
      </View>
      <View
        style={{
          marginBottom: SIZES.small,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.medium,
            color: "#777E90",
          }}
        >
          Ammount
        </Text>
        <Text
          style={{
            color: "white",
          }}
        >
          1000 USDC
        </Text>
      </View>
      <View
        style={{
          marginBottom: SIZES.small,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.medium,
            color: "#777E90",
          }}
        >
          Adress
        </Text>
        <Text
          style={{
            color: "white",
          }}
        >
          0x23930sjoijrweo
        </Text>
      </View>

      <View
        style={{
          marginBottom: SIZES.small,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.medium,
            color: "#777E90",
          }}
        >
          TransectionID
        </Text>
        <Text
          style={{
            color: "#777E90",
          }}
        >
          0xwklje09390239408934
        </Text>
      </View>
      <View
        style={{
          marginBottom: SIZES.small,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.medium,
            color: "#777E90",
          }}
        >
          Date
        </Text>
        <Text
          style={{
            color: "#777E90",
          }}
        >
          2022-08-17 04:22
        </Text>
      </View>
    </View>
  );
}
