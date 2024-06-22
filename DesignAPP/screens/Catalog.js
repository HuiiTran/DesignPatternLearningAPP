/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated, Button } from 'react-native';
import React, { useEffect, useState } from 'react';




const Catalog = ({navigation, route}) => {
    return(
        <View>
            <Text>Hello world - Catalog</Text>
            <Button title="Navigate test to singelton" onPress={() => navigation.navigate('Singleton')}/>
        </View>
    )
};



export default Catalog;
