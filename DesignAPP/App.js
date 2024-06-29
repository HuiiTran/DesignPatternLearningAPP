/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Dimensions } from 'react-native';
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
import MediatorScreen from './screens/MediatorScreen';
import MementoScreen from './screens/MementoScreen';
import ObserverScreen from './screens/ObserverScreen';
import StateScreen from './screens/StateScreen';

import Home from './screens/Home';
import Catalog from './screens/Catalog';
import WhatisDesignPatternScreen from './screens/WhatisDesignPatternScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerToggleButton  } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return(
    <View style={{ flex: 1}}>
      <DrawerContentScrollView
      {...props}
      contentContainerStyle={{backgroundColor: '#E74C3C'}}>
        <View style={{height: 50}}>
          {/* <Text style={{color: '#fff', alignSelf: 'center', fontSize: 40, marginTop: 25}}>Design Pattern</Text> */}
        </View>
        <View style = {{width:'91%',
        height:2,
        backgroundColor:'#382F29',
        opacity: 0.2,
        marginLeft:20,
        marginRight:20}}></View>
      <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  )
}

const Drawer = createDrawerNavigator();
const App = ({navigation, route}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
      backBehavior="history"
      drawerContent={props => <CustomDrawer {...props} />}
       screenOptions={{
        drawerPosition: 'right',
        drawerActiveBackgroundColor: '#bc463a',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        headerLeft: false,
        drawerStyle: {
          width: Dimensions.get('window').width / 1.7,
        },
        headerRight: () => <DrawerToggleButton />,
}}
        
>
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Home" component={Home} />
        <Drawer.Screen options={{headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="Catalog" component={Catalog} />
        <Drawer.Screen options={{drawerItemStyle: { display: 'none' }, headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'}, headerTintColor: '#fff',}} name="WhatisDesignPatternScreen" component={WhatisDesignPatternScreen} />


        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Factory Method" component={FactoryMethodScreen} />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Abstract Factory" component={AbstractFactoryScreen} />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Builder" component={BuilderScreen} />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Prototype" component={PrototypeScreen} />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Singleton" component={SingletonScreen}  />

        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Adapter" component={AdapterScreen}  />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Bridge" component={BridgeScreen}  />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Composite" component={CompositeScreen}  />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Decorator" component={DecoratorScreen}  />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Facade" component={FacadeScreen}  />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Flyweight" component={FlyweightScreen}  />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Proxy" component={ProxyScreen}  />
        
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Chain Of Responsibility" component={ChainOfResponsibilityScreen} />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Command" component={CommandScreen} />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Iterator" component={IteratorScreen} />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Mediator" component={MediatorScreen} />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Memento" component={MementoScreen} />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="Observer" component={ObserverScreen} />
        <Drawer.Screen options={{drawerItemStyle: { marginLeft: 35 },headerTitle: '',headerTitleAlign: 'center', headerStyle:{backgroundColor: '#d04b3e'}, headerTintColor: '#fff',}} name="State" component={StateScreen} />


      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
