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
import BuilderScreen from './screens/BuilderScreen';
import PrototypeScreen from './screens/ProtoypeScreen';
import ChainOfResponsibilityScreen from './screens/ChainOfResponsibilityScreen';
import CommandScreen from './screens/CommandScreen';
import IteratorScreen from './screens/IteratorScreen';
import AdapterScreen from './screens/AdapterScreen';
import BridgeScreen from './screens/BridgeScreen';
import CompositeScreen from './screens/CompositeScreen';
import DecoratorScreen from './screens/DecoratorScreen';
import FacadeScreen from './screens/FacadeScreen';
import FlyweightScreen from './screens/FlyweightScreen';
import ProxyScreen from './screens/ProxyScreen';

import Home from './screens/Home';
import Catalog from './screens/Catalog';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton  } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const App = ({navigation, route}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        drawerPosition: 'right',
        headerLeft: false,
        headerRight: () => <DrawerToggleButton />
}}
>
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Home" component={Home} />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Catalog" component={Catalog} />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Chain Of Responsibility" component={ChainOfResponsibilityScreen} />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Command" component={CommandScreen} />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Iterator" component={IteratorScreen} />

        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Factory Method" component={FactoryMethodScreen} />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Abstract Factory" component={AbstractFactoryScreen} />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Builder" component={BuilderScreen} />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Prototype" component={PrototypeScreen} />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Singleton" component={SingletonScreen}  />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Adapter" component={AdapterScreen}  />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Bridge" component={BridgeScreen}  />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Composite" component={CompositeScreen}  />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Decorator" component={DecoratorScreen}  />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Facade" component={FacadeScreen}  />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Flyweight" component={FlyweightScreen}  />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Proxy" component={ProxyScreen}  />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
