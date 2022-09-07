import {
  ActivityIndicator,
  BackHandler,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useFocusEffect } from "@react-navigation/native";
import { BigNumber, ethers } from "ethers";
import {
  find_recipient,
  get_provider,
  is_native_token,
} from "@wagpay/id/dist/utils";
import { chainData, getChain, getToken } from "fetcch-chain-data";
import { tokens as tokenData } from "fetcch-chain-data/dist/tokens";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useBalance, useID } from "../../hooks";
import { useAppContext } from "../../context";
import Button from "../../components/Button";
import { DropDown, item } from "../../components/DropDown";

export const RequestPayment = ({ navigation }: any) => {
  const { wid, userWalletInfo, scannedwid, setScannedWid, chain } =
    useAppContext();
  const { getId } = useID();
  const [amount, setAmount] = useState("");
  const [selectedChain, setSelectedChain] = useState(chain);
  const [token, setToken] = useState(
    tokenData["2"].find((t: any) => t.symbol === "USDC")
  );

  const [loading, setLoading] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [isTokenShowing, setIsTokenShowing] = useState(false);

  const [paymentRequest, setPaymentRequest] = useState<any>({});
  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomTokenSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleClosePress = () => {
    if (!bottomSheetRef) return;

    (bottomSheetRef as React.MutableRefObject<BottomSheet>).current.close();
  };

  const handleOpenPress = () => {
    if (!bottomSheetRef) return;

    (bottomSheetRef as React.MutableRefObject<BottomSheet>).current.expand();
  };

  // callbacks
  const handleTokenSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleTokenClosePress = () => {
    if (!bottomSheetRef) return;

    (
      bottomTokenSheetRef as React.MutableRefObject<BottomSheet>
    ).current.close();
  };

  const handleTokenOpenPress = () => {
    if (!bottomSheetRef) return;

    (
      bottomTokenSheetRef as React.MutableRefObject<BottomSheet>
    ).current.expand();
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (isShowing) {
          bottomSheetRef.current?.close();
          return true;
        } else if (!isShowing) {
          navigation.goBack();
          return true;
        }
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [bottomSheetRef, isShowing])
  );

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (isShowing) {
          bottomTokenSheetRef.current?.close();
          return true;
        } else if (!isTokenShowing) {
          navigation.goBack();
          return true;
        }
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [bottomTokenSheetRef, isTokenShowing])
  );

  const updateChain = (cD: string) => {
    console.log(cD, "cd ");
    const c = chainData.find((c) => c.name === cD);

    if (!c) return;

    const chain = getChain({ internalId: c.internalId });

    setSelectedChain(chain);
  };

  const updateToken = (t: string) => {
    const tokens = tokenData[selectedChain?.internalId.toString() as string];

    const tk = tokens.find((tkK: any) => tkK.name === t);

    if (!tk) return;
    console.log(tk);
    setToken(tk);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000000",
        width: "100%",
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 12,
      }}
    >
      <View style={styles.container}>
        <View>
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
                navigation.navigate("TabNavigation");
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                color={"#fff"}
                size={30}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "TTBold", ...styles.headerText }}>
              Recive
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Scanner");
              }}
            >
              <MaterialCommunityIcons
                name="line-scan"
                color={"#ffffff"}
                size={25}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "#111",
              width: "100%",
              borderRadius: 8,
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 12,
              marginTop: 60,
            }}
          >
            <Text
              style={{
                width: "100%",
                fontSize: 18,
                fontWeight: "500",
                lineHeight: 20,
                color: "#9B9B9B",
                marginBottom: 12,
                fontFamily: "TTInterfaces",
              }}
            >
              Receipent wagpay id
            </Text>
            <TextInput
              defaultValue={scannedwid}
              onChangeText={(a) => setScannedWid(a)}
              placeholderTextColor="#9B9B9B"
              placeholder="userm@wagpay"
              style={{
                backgroundColor: "#000",
                padding: 8,
                width: "100%",
                color: "white",
                fontSize: 16,
                marginBottom: 12,
              }}
            />
            <View
              style={{
                width: "100%",
                paddingHorizontal: 16,
                backgroundColor: "#000000",
                borderRadius: 8,
                marginBottom: 10,
              }}
            >
              <Text
                onPress={() => handleOpenPress()}
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  lineHeight: 20,
                  marginTop: 16,
                  color: "#9B9B9B",
                  fontFamily: "TTInterfaces",
                }}
              >
                Select Chain
              </Text>
              <Text
                onPress={() => handleOpenPress()}
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 20,
                  marginTop: 16,
                  color: "#9B9B9B",
                  fontFamily: "TTBold",
                  marginBottom: 20,
                }}
              >
                {selectedChain?.name}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                paddingHorizontal: 16,
                backgroundColor: "#000000",
                borderRadius: 8,
                marginBottom: 10,
              }}
            >
              <Text
                onPress={() => handleTokenOpenPress()}
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  lineHeight: 20,
                  marginTop: 16,
                  color: "#9B9B9B",
                  fontFamily: "TTInterfaces",
                }}
              >
                Select Token
              </Text>
              <Text
                onPress={() => handleTokenOpenPress()}
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 20,
                  marginTop: 16,
                  color: "#9B9B9B",
                  fontFamily: "TTBold",
                  marginBottom: 20,
                }}
              >
                {token?.name}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                paddingHorizontal: 16,
                backgroundColor: "#000000",
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginVertical: 16 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    lineHeight: 20,
                    color: "#9B9B9B",
                    fontFamily: "TTMedium",
                  }}
                >
                  Amount
                </Text>
                <TextInput
                  defaultValue={amount}
                  onChangeText={(a) => setAmount(a)}
                  placeholder="--"
                  placeholderTextColor={"#ffff"}
                  style={{
                    fontSize: 18,
                    color: "#fff",
                    marginTop: 12,
                    fontFamily: "TTInterfaces",
                  }}
                  keyboardType="number-pad"
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <Button
            title={
              loading ? (
                <ActivityIndicator size={20} color="white" />
              ) : (
                "Request Payment"
              )
            }
          />
        </View>
      </View>
      <DropDown
        onChange={(idx: any) => {
          setIsShowing(idx < 1 ? false : true);
        }}
        setValue={updateChain}
        snapPoints={snapPoints}
        bottomSheetRef={bottomSheetRef}
        data={chainData.map((t) => {
          return { value: t.name, key: t.chainId } as unknown as item;
        })}
        handleClosePress={handleClosePress}
        handleSheetChanges={handleSheetChanges}
      />
      <DropDown
        onChange={(idx: any) => {
          setIsShowing(idx < 1 ? false : true);
        }}
        setValue={updateToken}
        snapPoints={snapPoints}
        bottomSheetRef={bottomTokenSheetRef}
        handleClosePress={handleTokenClosePress}
        handleSheetChanges={handleTokenSheetChanges}
        data={tokenData[selectedChain?.internalId.toString() as string].map(
          (t: any) => {
            return { key: t.address, value: t.symbol };
          }
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#000000",
    flex: 1,
    paddingHorizontal: 1,
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
});
