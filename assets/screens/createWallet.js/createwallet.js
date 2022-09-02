// import {
//   StyleSheet,
//   Text,
//   View,
//   KeyboardAvoidingView,
//   TextInput,
//   SafeAreaView,
// } from "react-native";
// import "react-native-get-random-values";

// import "@ethersproject/shims";

// import { ethers } from "ethers";
// import React, { useEffect } from "react";
// import Button from "../../components/Button";

// const CreateWallet = ({ navigation }) => {
//   const CreateWallet = async () => {
//     const wallet = ethers.Wallet.createRandom();
//     console.log("address:", await wallet.address);
//     console.log("mnemonic:", await wallet.mnemonic.phrase);
//     console.log("privateKey:", await wallet.privateKey);
//   };

//   useEffect(() => {
//     CreateWallet();
//   }, []);

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//       }}
//     >
//       <View style={styles.Container}>
//         <View>
//           <Text style={styles.headerText}>Create Wallet</Text>
//         </View>
//         <View style={{ marginTop: 36 }}>
//           <View>
//             <Text style={styles.inputHeader}>Username</Text>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 placeholder="Enter first name"
//                 placeholderTextColor={"#636363"}
//                 style={styles.textInputS}
//                 keyboardType="default"
//               />

//               <Text
//                 style={{
//                   color: "#ABABAB",
//                   lineHeight: 18,
//                   marginTop: 4,
//                   fontSize: 14,
//                   fontWeight: "500",
//                 }}
//               >
//                 *You can not change your username later.
//               </Text>
//             </View>
//           </View>
//           <View style={{ marginVertical: 20 }}>
//             <Text style={styles.inputHeader}>Password</Text>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 placeholder="Password"
//                 placeholderTextColor={"#636363"}
//                 style={styles.textInputS}
//               />
//               <Text
//                 style={{
//                   color: "#ABABAB",
//                   lineHeight: 18,
//                   marginTop: 4,
//                   fontSize: 14,
//                   fontWeight: "500",
//                 }}
//               >
//                 Best passwords and long and contain letters, numbers and special
//                 characters
//               </Text>
//             </View>
//           </View>
//         </View>
//         <View style={{ position: "absolute", bottom: 38, width: "100%" }}>
//           <Button
//             title={"Next"}
//             onPress={() => {
//               navigation.navigate("Loading", {
//                 meesage: "creating wallet",
//                 next: "CreateWalletOnSuccess",
//               });
//             }}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CreateWallet;

// const styles = StyleSheet.create({
//   Container: {
//     backgroundColor: "#000000",
//     flex: 1,
//     paddingTop: 60,
//     alignItems: "center",
//     paddingBottom: 38,
//   },

//   headerText: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#ffffff",
//     lineHeight: 22.5,
//   },
//   inputContainer: {
//     marginBottom: 8,
//     marginTop: 4,
//     height: 56,
//     width: 357,
//     borderRadius: 8,
//     borderWidth: 2,
//     borderColor: "#3A3A3A",
//   },
//   inputHeader: {
//     color: "#FFFFFF",
//     lineHeight: 23,
//     fontSize: 18,
//     fontWeight: "500",
//     marginHorizontal: 10,
//     marginBottom: 5,
//   },
//   textInputS: {
//     paddingVertical: 14,
//     paddingHorizontal: 15,
//     fontSize: 18,
//     color: "#FFFFFF",
//   },
// });

import Icon from "react-native-vector-icons/Ionicons";
import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, SafeAreaView, StatusBar, Text } from "react-native";
import ReactNativePinView from "react-native-pin-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
const App = ({ navigation }) => {
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 6) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            paddingTop: 24,
            paddingBottom: 48,
            color: "rgba(255,255,255,0.7)",
            fontSize: 20,
          }}
        >
          Enter 6 digit password
        </Text>
        <ReactNativePinView
          inputSize={18}
          ref={pinView}
          pinLength={6}
          buttonSize={60}
          onValueChange={(value) => setEnteredPin(value)}
          buttonAreaStyle={{
            marginTop: 24,
          }}
          inputAreaStyle={{
            marginBottom: 24,
          }}
          inputViewEmptyStyle={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#FFF",
          }}
          inputViewFilledStyle={{
            backgroundColor: "#FFF",
          }}
          buttonViewStyle={{
            borderWidth: 1,
            borderColor: "#FFF",
          }}
          buttonTextStyle={{
            color: "#FFF",
          }}
          onButtonPress={(key) => {
            if (key === "custom_left") {
              pinView.current.clear();
            }
            if (key === "custom_right") {
              alert("Entered Pin: " + enteredPin);
            }
          }}
          customLeftButton={
            showRemoveButton ? (
              <Icon name={"ios-backspace"} size={36} color={"#FFF"} />
            ) : undefined
          }
          customRightButton={
            showCompletedButton ? (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Loading", {
                    meesage: "creating wallet",
                    next: "CreateWalletOnSuccess",
                  });
                }}
              >
                <MaterialCommunityIcons
                  name="check"
                  color={"#ffffff"}
                  size={25}
                />
              </TouchableOpacity>
            ) : undefined
          }
        />
      </SafeAreaView>
    </>
  );
};
export default App;
