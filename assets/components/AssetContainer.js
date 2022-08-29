import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const AssetContainer = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ marginRight: 12 }}>
          <Image
            source={require("../USDCicon.png")}
            style={{ height: 32, width: 32 }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: "#FFFFFF",
              fontWeight: "500",
              lineHeight: 22.5,
              marginBottom: 4,
            }}
          >
            USDC
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#C3C3C3",
              fontWeight: "400",
              lineHeight: 17.5,
            }}
          >
            1000 USDC
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            color: "#FFFFFF",
            fontWeight: "400",
            lineHeight: 22.5,
            marginBottom: 4,
          }}
        >
          $1000.00
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#00CD5E",
            fontWeight: "400",
            lineHeight: 15,
          }}
        >
          +0.28%
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
