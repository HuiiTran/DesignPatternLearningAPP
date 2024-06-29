/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated, ImageComponent } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Home_En } from '../assets/data/Home';
import { Mainstyles } from './Style';
import StyleButton from './StyleButton';



const ClassificationScreen = ({navigation, route}) => {
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
    const smallHeader_text = (itext) =>{
        return(
            <Text style={{alignSelf: 'left',
                fontWeight: 'bold',
                color: '#444444',
                fontSize: 60,
                marginLeft: 10,
                }}>
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
    const Home_En_Screen = Home_En;
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
            <Text style={{alignSelf: 'left',
                fontWeight: 'bold',
                color: '#444444',
                fontSize: 55,
                marginLeft: 10,
                }}>
                    Classification of patterns
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            Design patterns differ by their complexity, level of detail and scale of applicability to the entire system being designed. I like the analogy to road construction: you can make an intersection safer by either installing some traffic lights or building an entire multi-level interchange with underground passages for pedestrians.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            The most basic and low-level patterns are often called idioms. They usually apply only to a single programming language.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            The most universal and high-level patterns are architectural patterns. Developers can implement these patterns in virtually any language. Unlike other patterns, they can be used to design the architecture of an entire application.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>In addition, all patterns can be categorized by their intent, or purpose. This book covers three main groups of patterns:</Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
                    <Text style={{fontWeight: 'bold'}}>- Creational patterns </Text>
                    provide object creation mechanisms that increase flexibility and reuse of existing code.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            <Text style={{fontWeight: 'bold'}}>- Structural patterns </Text>explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}><Text style={{fontWeight: 'bold'}}>- Behavioral patterns </Text> take care of effective communication and the assignment of responsibilities between objects.</Text>
        </ScrollView>
    )
};

const styles = Mainstyles;

export default ClassificationScreen;
