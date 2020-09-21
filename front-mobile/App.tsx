import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Play_400Regular,
  Play_700Bold
} from '@expo-google-fonts/play';
import Header from './src/components/Header';
import Routes from './src/Routes';


export default function App() {

  const [fontsLoaded] = useFonts({
    Play_400Regular,  
    Play_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
