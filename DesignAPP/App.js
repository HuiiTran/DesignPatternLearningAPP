/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SingletonScreen from './screens/SingletonScreen';
import FactoryMethodScreen from './screens/FactoryMethodScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = ({navigation, route}) => {
  return (
    <GestureHandlerRootView>
      <FactoryMethodScreen/>
    </GestureHandlerRootView>
  );
};
export default App;
