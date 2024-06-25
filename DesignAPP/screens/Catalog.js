/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Catalog_En } from '../assets/data/Catalog';
import { Mainstyles } from './Style';
import StyleButton from './StyleButton';
import DesignPatternComponent from '../assets/data/DesignPatternComponent';

import factoryMethod from '../assets/data/components/pattern icons/creational patterns/factorymethod.png'
import abstractFactory from '../assets/data/components/pattern icons/creational patterns/abstractfactory.png'
import builder from '../assets/data/components/pattern icons/creational patterns/builder.png'
import prototype from '../assets/data/components/pattern icons/creational patterns/prototype.png'
import singleton from '../assets/data/components/pattern icons/creational patterns/singleton.png'

import adapter from '../assets/data/components/pattern icons/structural patterns/adapter.png'
import bridge from '../assets/data/components/pattern icons/structural patterns/bridge.png'
import composite from '../assets/data/components/pattern icons/structural patterns/composite.png'
import decorator from '../assets/data/components/pattern icons/structural patterns/decorator.png'
import facade from '../assets/data/components/pattern icons/structural patterns/facade.png'
import flyweight from '../assets/data/components/pattern icons/structural patterns/flyweight.png'
import proxy from '../assets/data/components/pattern icons/structural patterns/proxy.png'

import chainofresponsibility from '../assets/data/components/pattern icons/behavioral patterns/chainofresponsibility.png'
import command from '../assets/data/components/pattern icons/behavioral patterns/command.png'
import iterator from '../assets/data/components/pattern icons/behavioral patterns/iterator.png'
import mediator from '../assets/data/components/pattern icons/behavioral patterns/mediator.png'
import memento from '../assets/data/components/pattern icons/behavioral patterns/memento.png'
import observer from '../assets/data/components/pattern icons/behavioral patterns/observer.png'
import state from '../assets/data/components/pattern icons/behavioral patterns/state.png'
import strategy from '../assets/data/components/pattern icons/behavioral patterns/strategy.png'
import templatemethod from '../assets/data/components/pattern icons/behavioral patterns/templatemethod.png'
import visitor from '../assets/data/components/pattern icons/behavioral patterns/visitor.png'




const Catalog = ({navigation, route}) => {
    const content_text = (itext) =>{
        return(
            <Text style={styles.content}>
                {itext}
            </Text>
        );
    };
    const bigHeader_text = (itext) =>{
        return(
            <Text style={styles.bigHeader}>
                {itext}
            </Text>
        );
    };
    const CatalogHeader_text = (itext) =>{
        return(
            <Text style={styles.CatalogHeader}>
                {itext}
            </Text>
        );
    };
    const header1_text = (itext) =>{
        return(
            <Text style={styles.header1}>
                {itext}
            </Text>
        );
    };
    const image_content = (imageLink) =>{
        return(
            <View style={styles.image_content}>
                <Image style={styles.image_content} source={imageLink} />
            </View>
        );
    };
    const Catalog_En_Screen = Catalog_En;
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
            {CatalogHeader_text('The Catalog of Design Patterns')}
            
            <View style={{marginLeft:10}}>
            {header1_text('Creational Design Pattern')}

            <View style={{flexDirection:'row'}}>
                <DesignPatternComponent image={''} name={'Factory Method'} onPress={()=> navigation.navigate('Factory Method')}></DesignPatternComponent>
                <DesignPatternComponent image={''} name={'Factory Method'} onPress={()=> navigation.navigate('Factory Method')}></DesignPatternComponent>
            </View>
            <View style={{borderWidth:1, alignSelf:'flex-end', width:10, height:10, marginRight:10}}></View>
            </View>

            <View style={{height:30}}></View>

        </ScrollView>
    )
};

const styles = Mainstyles;

export default Catalog;
