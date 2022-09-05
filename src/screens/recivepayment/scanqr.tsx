import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { MaterialIcons } from "@expo/vector-icons";
import { useAppContext } from "../../context";

export default function Scanner({ navigation }: any) {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState(false);
  const { setScannedWid } = useAppContext();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    setScannedWid(data);
    setScanned(false);
    navigation.navigate("Send");
    console.log(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000000",
        width: "100%",
        paddingTop: 40,
        paddingBottom: 20,
      }}
    >
      <View>
        <View
          style={{
            padding: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              marginRight: "33%",
            }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              color={"#fff"}
              size={36}
            />
          </TouchableOpacity>
          <View
            style={{
              flexGrow: 1,
            }}
          >
            <Text style={styles.headerText}>Scan</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
            paddingVertical: 12,
          }}
        >
          Scan any Qr code to pay
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    // textAlign: "center",
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
});
