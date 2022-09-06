import { View, Text, Image } from "react-native";
import React from "react";
import { SIZES } from "../../assets/theme";
import USDCCOIN from "../../assets/USDCicon.png";
import { TransetionInfo } from "../screens/transection/Transactions";
export function Transection({ hash, address, ammount, date }: TransetionInfo) {
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
          {ammount.toString().slice(0, 4)}
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
          {address.slice(0, 10)}
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
          {hash.slice(0, 10)}
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
          {date}
        </Text>
      </View>
    </View>
  );
}
