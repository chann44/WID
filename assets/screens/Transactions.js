import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "../components/Button";
import Transection from "../components/transection";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../theme";

const Transections = () => {
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
            <TouchableOpacity>
              <MaterialIcons
                name="keyboard-arrow-left"
                color={"#fff"}
                size={25}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Transections</Text>
          </View>
          <View
            style={{
              padding: 8,
            }}
          >
            <Transection />
            <Transection />
            <Transection />
            <Transection />
            <Transection />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Transections;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  headerText: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
});
