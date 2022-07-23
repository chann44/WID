import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding1 from './assets/screens/Onboarding1';
import Onboarding2 from './assets/screens/Onboarding2';
import Button from './assets/components/Button';
import AppLoading from 'expo-app-loading';
import useFonts from './assets/fonts/useFonts';
import Onboarding3 from './assets/screens/Onboarding3';

export default function App() {
  const LoadFonts = async () => {
    await useFonts();
  };
  <AppLoading startAsync={LoadFonts}/>
  return (
    <Onboarding1 />
  );
}

