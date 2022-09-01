import Onboarding1 from "./assets/screens/Onboarding1";
import Onboarding2 from "./assets/screens/Onboarding2";
import Onboarding3 from "./assets/screens/Onboarding3";
import UserRegistration from "./assets/screens/UserRegistration";
import ConnectWallet1 from "./assets/screens/ConnectWallet1";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Transactions from "./assets/screens/Transactions";
import Wallet from "./assets/screens/Wallet";
import Home from "./assets/screens/Home";
import Send from "./assets/screens/Send";
import ConnectWalletMain from "./assets/screens/ConnectWalletMain";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import LaunchS from "./assets/screens/LaunchS";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccoundCreated from "./assets/screens/accountcreated";
import TryAgain from "./assets/screens/TryAgain";
import TransectionSuccess from "./assets/screens/transectionsuccess";
import RequestPayment from "./assets/screens/recivepayment/RequestPayment";
import ReciveQr from "./assets/screens/recivepayment/ReciveQr";
import CreateWalletOnBoarding from "./assets/screens/createWallet.js/onBoardincreateWallet";
import CreateWallet from "./assets/screens/createWallet.js/createwallet";
import Loading from "./assets/screens/Loading";
import CreateWalletSuccess from "./assets/screens/createWallet.js/createWalletSuccess";
import ImportWallet from "./assets/screens/createWallet.js/importWallet";
import Profile from "./assets/screens/Profile";
import Paymentrequest from "./assets/components/paymentrequest";
import Scanner from "./assets/screens/scanqr";

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
        component={Transactions}
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
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LaunchS" component={LaunchS} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="UserRegistration" component={UserRegistration} />
        <Stack.Screen name="ConnectWallet1" component={ConnectWallet1} />
        <Stack.Screen name="ConnectWalletMain" component={ConnectWalletMain} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="Recive" component={ReciveQr} />
        <Stack.Screen name="RequestPayment" component={RequestPayment} />
        <Stack.Screen name="PaymentRequest" component={Paymentrequest} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen
          name="CreateWalletOnBoarding"
          component={CreateWalletOnBoarding}
        />
        <Stack.Screen
          name="CreateWalletOnSuccess"
          component={CreateWalletSuccess}
        />
        <Stack.Screen name="CreateWallet" component={CreateWallet} />
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
        <Stack.Screen name="Transections" component={Transactions} />
        <Stack.Screen name="createAccountSuccess" component={AccoundCreated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
