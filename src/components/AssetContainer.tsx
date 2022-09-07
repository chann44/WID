import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import USDCIMAGE from "../../assets/USDCicon.png";
import { ethers } from "ethers";

interface IProps {
  token: any
}

const AssetContainer = ({ token }: IProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ marginRight: 12 }}>
          <Image source={token.logo ? token.logo : USDCIMAGE} style={{ height: 32, width: 32 }} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: "#FFFFFF",
              fontWeight: "500",
              lineHeight: 22.5,
              marginBottom: 4,
              fontFamily: 'TTInterfaces', 
            }}
          >
            {token.name}
          </Text>
        </View>
      </View>
      <View>
          <Text
            style={{
              fontSize: 14,
              color: "#C3C3C3",
              fontWeight: "400",
              lineHeight: 40,
              marginBottom: 6,
              fontFamily: 'TTInterfaces', 
            }}
          >
            {ethers.utils.formatUnits(token.balance, token.decimals).toString()} {token.symbol}
          </Text>
      </View>
    </View>
  );
};

export default AssetContainer;

const styles = StyleSheet.create({
  container: {
    height: 76,

    backgroundColor: "#1C1C1C",
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});
