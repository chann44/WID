import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding1 from './assets/screens/Onboarding1';
import Onboarding2 from './assets/screens/Onboarding2';
import Button from './assets/components/Button';
import AppLoading from 'expo-app-loading';
import useFonts from './assets/fonts/useFonts';
import Onboarding3 from './assets/screens/Onboarding3';
import UserRegistration from './assets/screens/UserRegistration';
import ConnectWallet1 from './assets/screens/ConnectWallet1';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Transaction from './assets/screens/Transaction';
import Wallet from './assets/screens/Wallet';
import Home from './assets/screens/Home';
import Send from './assets/screens/Send';
import ConnectWalletMain from './assets/screens/ConnectWalletMain';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import LaunchS from './assets/screens/LaunchS'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export function TabNavigation() {
  return(
      <Tab.Navigator screenOptions={{tabBarStyle:{
        backgroundColor:'#000'
      }}} >
        <Tab.Screen name="Home" component={Home} 
          options={{headerShown:false,
          tabBarIcon:()=>(
            <MaterialIcons name='home' color={'#fff'} size={25}/>
          )
          }}
        />
        <Tab.Screen name="Transaction" component={Transaction}
          options={{
            tabBarIcon:()=>(
              <AntDesign name='swap' color={'#fff'} size={20} 
                style={{transform:[{ rotate: '90deg'}]}} 
              />
            )
            }}
  
        />
        <Tab.Screen name="Wallet" component={Wallet}
          options={{
            tabBarIcon:()=>(
              <Entypo name='wallet' color={'#fff'} size={20} 
              />
            )
            }}
        />
      </Tab.Navigator>
  )
}



export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LaunchS" component={LaunchS} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="UserRegistration" component={UserRegistration} />
        <Stack.Screen name="ConnectWallet1" component={ConnectWallet1} />
        <Stack.Screen name="ConnectWalletMain" component={ConnectWalletMain} />
        <Stack.Screen name="TabNavigation" component={TabNavigation}/>
        <Stack.Screen name="Send" component={Send} />
      </Stack.Navigator>
    </NavigationContainer>  
    );
}

