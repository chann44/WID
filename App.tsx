import "react-native-get-random-values";
import "@ethersproject/shims";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccoundCreated } from "./src/screens/accountcreated/accountcreated";
import { LaunchS } from "./src/screens/onboarding/LaunchS";
import { Onboarding1 } from "./src/screens/onboarding/Onboarding1";
import { Onboarding2 } from "./src/screens/onboarding/Onboarding2";
import Onboarding3 from "./src/screens/createWallet.js/Onboarding3";
import { UserRegistration } from "./src/screens/UserRegistration";
import { Send } from "./src/screens/Send";
import { ReciveQr } from "./src/screens/recivepayment/ReciveQr";
import { RequestPayment } from "./src/screens/recivepayment/RequestPayment";
import { Paymentrequest } from "./src/components/paymentrequest";
import Scanner from "./src/screens/recivepayment/scanqr";
import EnterSeedPhrase from "./src/screens/createWallet.js/EnterSeedPhrase";
import { CreateWalletLoading } from "./src/screens/createWallet.js/CreatewalletLoadin";
import { CreateWalletSuccess } from "./src/screens/createWallet.js/createWalletSuccess";
import TransectionSuccess from "./src/screens/transection/transectionsuccess";
import CreateWalletOnBoarding from "./src/screens/createWallet.js/onBoardincreateWallet";
import ImportWallet from "./src/screens/createWallet.js/importWallet";
import Loading from "./src/screens/Loading";
import { Transections } from "./src/screens/transection/Transactions";
import { Profile } from "./src/screens/Profile";
import { Home } from "./src/screens/Home";
import { ConnectWallet1 } from "./src/screens/ConnectWallet1";
import { AppCOntextProveder, useAppContext } from "./src/context";
import { useEffect } from "react";
import ShowSeedPhrase from "./src/screens/createWallet.js/seedphraseshow";
import { CreateAccountLoading } from "./src/screens/accountcreated/createaccountloading";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TransectionDetails from "./src/screens/transection/TransectionDetails";
import { TransactionLoading } from "./src/screens/transection/TransactionLoading";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="home" color={"#fff"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transections}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign
              name="swap"
              color={"#fff"}
              size={20}
              style={{ transform: [{ rotate: "90deg" }] }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="account-circle" color={"#fff"} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const { setUserWalletInfo, userWalletInfo } = useAppContext();
  const [fontsLoaded] = useFonts({
    TTInterfaces: require("./assets/fonts/TTInterfaces-Regular.ttf"),
    TTBold: require("./assets/fonts/TTInterfaces-Bold.ttf"),
    TTExtraBold: require("./assets/fonts/TTInterfaces-ExtraBold.ttf"),
    TTMedium: require("./assets/fonts/TTInterfaces-Medium.ttf"),
  });

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <AppCOntextProveder>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={"LaunchS"}
          >
            <Stack.Screen name="LaunchS" component={LaunchS} />
            <Stack.Screen name="Onboarding1" component={Onboarding1} />
            <Stack.Screen name="Onboarding2" component={Onboarding2} />
            <Stack.Screen name="Onboarding3" component={Onboarding3} />
            <Stack.Screen
              name="UserRegistration"
              component={UserRegistration}
            />
            <Stack.Screen name="ConnectWallet1" component={ConnectWallet1} />
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen name="Send" component={Send} />
            <Stack.Screen name="TransactionLoading" component={TransactionLoading} />
            <Stack.Screen name="Recive" component={ReciveQr} />
            <Stack.Screen name="RequestPayment" component={RequestPayment} />
            <Stack.Screen name="Scanner" component={Scanner} />
            <Stack.Screen
              name="CreateWalletOnBoarding"
              component={CreateWalletOnBoarding}
            />
            <Stack.Screen name="ShowSeedPhrase" component={ShowSeedPhrase} />
            <Stack.Screen name="EnterSeedPhrase" component={EnterSeedPhrase} />
            <Stack.Screen
              name="CreateWalletLoading"
              component={CreateWalletLoading}
            />
            <Stack.Screen
              name="CreateWalletOnSuccess"
              component={CreateWalletSuccess}
            />
            <Stack.Screen
              name="CreateWalletSuccess"
              component={CreateWalletSuccess}
            />
            <Stack.Screen
              name="TransectionSuccess"
              component={TransectionSuccess}
            />
            <Stack.Screen name="ImportWallet" component={ImportWallet} />
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Transections" component={Transections} />
            <Stack.Screen
              name="createAccountSuccess"
              component={AccoundCreated}
            />
            <Stack.Screen name="txdetails" component={TransectionDetails} />
            <Stack.Screen
              name="CreateAccountLoading"
              component={CreateAccountLoading}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppCOntextProveder>
    </GestureHandlerRootView>
  );
}
