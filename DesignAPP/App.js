/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
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
import AbstractFactoryScreen from './screens/AbstractFactoryScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton  } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const App = ({navigation, route}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SingletonScreen" screenOptions={{
        drawerPosition: 'right',
        headerLeft: false,
        headerRight: () => <DrawerToggleButton />
}}
>
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Singleton" component={SingletonScreen}  />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Factory Method" component={FactoryMethodScreen} />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Abstract Factory" component={AbstractFactoryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
