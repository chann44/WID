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



export default function App() {
  const LoadFonts = async () => {
    await useFonts();
  };
  <AppLoading startAsync={LoadFonts}/>

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarStyle:{
        backgroundColor:'#000'
      }}} >
        <Tab.Screen name="Home" component={Home} 
          options={{headerShown:false}}
        />
        <Tab.Screen name="Transaction" component={Transaction} />
        <Tab.Screen name="Wallet" component={Wallet} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

