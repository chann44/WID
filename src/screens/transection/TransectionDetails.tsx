import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SIZES } from "../../../assets/theme";
import SVGImg from "../../../assets/tx.svg";

const TransectionDetails = ({ navigation, route }: any) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#000",
        paddingHorizontal: 8,
        paddingVertical: SIZES.extraLarge,
        flex: 1,
      }}
    >
      <View>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 4,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                color={"#fff"}
                size={30}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Transaction Details</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 40,
              width: "100%",
            }}
          >
            <View
              style={{
                marginBottom: 20,
              }}
            >
              <SVGImg />
            </View>
            <View style={{ ...styles.rowView, marginVertical: 20 }}>
              <Text style={styles.text}>Transaction status</Text>
              <Text style={{ ...styles.text, color: "green" }}>completed</Text>
            </View>
            <View style={{ ...styles.rowView }}>
              <Text style={styles.text}>Transaction type</Text>
              <Text style={{ ...styles.text, fontWeight: "500", fontSize: 18 }}>
                send
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#111111",
                margin: 12,
                width: "100%",
                paddingVertical: 18,
                paddingHorizontal: 12,
              }}
            >
              {/* sender details */}
              <Text
                style={{
                  ...styles.text,
                  paddingHorizontal: 12,
                  marginBottom: 15,
                  fontSize: 19,
                }}
              >
                Sender details
              </Text>
              <View style={{ ...styles.rowView, alignItems: "center" }}>
                <Text
                  style={{ ...styles.text, fontSize: 17, marginBottom: 12 }}
                >
                  Ammount sent
                </Text>
                <View>
                  <Text style={styles.text}>1000 USDC</Text>
                  <Text
                    style={{ ...styles.text, fontSize: 10, textAlign: "right" }}
                  >
                    on Polygon
                  </Text>
                </View>
              </View>
              <View style={{ ...styles.rowView, marginTop: 12 }}>
                <Text style={styles.text}>Sender address</Text>
                <Text style={styles.text}>0xweoijoeiwj</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#111111",
                margin: 12,
                width: "100%",
                paddingVertical: 18,
                paddingHorizontal: 12,
              }}
            >
              {/* sender details */}
              <Text
                style={{
                  ...styles.text,
                  paddingHorizontal: 12,
                  marginBottom: 15,
                  fontSize: 19,
                }}
              >
                Recipient details
              </Text>
              <View style={{ ...styles.rowView, alignItems: "center" }}>
                <Text
                  style={{ ...styles.text, fontSize: 17, marginBottom: 12 }}
                >
                  Ammount sent
                </Text>
                <View>
                  <Text style={styles.text}>1000 USDC</Text>
                  <Text
                    style={{ ...styles.text, fontSize: 10, textAlign: "right" }}
                  >
                    on Polygon
                  </Text>
                </View>
              </View>
              <View style={{ ...styles.rowView, marginTop: 12 }}>
                <Text style={styles.text}>Sender address</Text>
                <Text style={styles.text}>0xweoijoeiwj</Text>
              </View>
            </View>

            <View
              style={{
                ...styles.rowView,
                marginBottom: 15,
              }}
            >
              <Text style={styles.text}>Payment IDs</Text>
              <Text style={{ ...styles.text, ...styles.dull }}>
                0xweojeojoj
              </Text>
            </View>
            <View
              style={{
                ...styles.rowView,
                marginBottom: 15,
              }}
            >
              <Text style={styles.text}>Transaction hash</Text>
              <Text style={{ ...styles.text, ...styles.dull }}>
                Transaction status
              </Text>
            </View>
          </View>
          <View
            style={{
              ...styles.rowView,
              marginBottom: 15,
            }}
          >
            <Text style={styles.text}>Date & Time</Text>
            <Text style={{ ...styles.text, ...styles.dull }}>
              Transaction status
            </Text>
          </View>
          <TouchableOpacity
            style={{
              marginBottom: 20,
              backgroundColor: "#2C2C2C",
              marginHorizontal: 20,
              padding: 8,
              marginTop: 20,
              borderRadius: 30,
            }}
            onPress={() => {
              Linking.openURL(
                `https://testnet.bscscan.com/tx/${route.params.tx}`
              );
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#D3CCFF",
              }}
            >
              View transaction on explorer
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TransectionDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  headerText: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
  text: {
    color: "white",
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 12,
  },
  dull: {
    color: "#777E90",
  },
});
