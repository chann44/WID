import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../../assets/theme";
import { Transection } from "../../components/transection";
import { useAppContext } from "../../context";
import axios from "axios";

export interface TransetionInfo {
  hash: string;
  address: string;
  date: string;
  ammount: string | number;
}

export const Transections = ({ navigation }: any) => {
  const { userWalletInfo } = useAppContext();
  const [txs, setTxs] = useState<any>();

  const api_key = "FEX8KK9SREHZTD874Z8T82CU77NYP5I5H9";
  const addr = "0x588C9929C7e6018E32f6Ad250E7abaecf106Ad7e";

  const getTexs = async () => {
    const res = await axios.get(
      `https://api.polygonscan.com/api?module=account&action=txlist&address=${addr}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${api_key}`
    );
    setTxs(res.data.result);
  };

  useEffect(() => {
    getTexs();
  }, []);

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
            {txs?.map((tx: any) => {
              return (
                <Transection
                  hash={tx.hash}
                  address={tx.from}
                  ammount={tx.value}
                  date=""
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

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
