import { StatusBar } from "expo-status-bar";
import { AsyncStorage, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../../context";
import { useEffect } from "react";

export function LaunchS({ navigation }: any) {
  const { setUserWalletInfo } = useAppContext();

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("userwalletinfo");
      console.log(value);
      if (value !== null) {
        // We have data!!
        setUserWalletInfo(JSON.parse(value));
        const parsedVal = JSON.parse(value);
        console.log("parsed val");
        navigation.navigate(
          parsedVal.id ? "TabNavigation" : "UserRegistration"
        );
        console.log(value);
      } else {
        navigation.navigate("Onboarding1");
      }
    } catch (error) {
      console.log(error);
      setUserWalletInfo(null);
      // Error retrieving data
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      _retrieveData();
    }, 700);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.circle2}>
        <View style={styles.circle1}>
          <View style={styles.circle}>
            <Text style={styles.text}>WAGPAY</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },
  circle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000A2C",
    justifyContent: "center",
    alignItems: "center",
  },
  circle1: {
    height: 400,
    width: 400,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: "#000A2C",
    justifyContent: "center",
    alignItems: "center",
  },
  circle2: {
    height: 600,
    width: 600,
    borderRadius: 300,
    borderWidth: 2,
    borderColor: "#000A2C",
    justifyContent: "center",
    alignItems: "center",
  },
  circle3: {
    height: 237,
    width: 237,
    borderRadius: 237 / 2,
    backgroundColor: "#7BA2EF",
    position: "absolute",
    opacity: 0.5,
  },
});
