/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated, ImageComponent } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Home_En } from '../assets/data/Home';
import { Mainstyles } from './Style';
import StyleButton from './StyleButton';



const HistoryofpatternsScreen = ({navigation, route}) => {
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
            {smallHeader_text('History of patterns')}

            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
                Who invented patterns? That’s a good, but not a very accurate, question. Design patterns aren’t obscure, sophisticated concepts—quite the opposite. Patterns are typical solutions to common problems in object-oriented design. When a solution gets repeated over and over in various projects, someone eventually puts a name to it and describes the solution in detail. That’s basically how a pattern gets discovered.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            The concept of patterns was first described by Christopher Alexander in <Text style={{fontWeight: 'bold'}}>A Pattern Language: Towns, Buildings, Construction.</Text> The book describes a “language” for designing the urban environment. The units of this language are patterns. They may describe how high windows should be, how many levels a building should have, how large green areas in a neighborhood are supposed to be, and so on.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            The idea was picked up by four authors: Erich Gamma, John Vlissides, Ralph Johnson, and Richard Helm. In 1994, they published <Text style={{fontWeight: 'bold'}}>Design Patterns: Elements of Reusable Object-Oriented Software,</Text>, in which they applied the concept of design patterns to programming. The book featured 23 patterns solving various problems of object-oriented design and became a best-seller very quickly. Due to its lengthy name, people started to call it “the book by the gang of four” which was soon shortened to simply “the GoF book”.            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
Since then, dozens of other object-oriented patterns have been discovered. The “pattern approach” became very popular in other programming fields, so lots of other patterns now exist outside of object-oriented design as well.            </Text>
        </ScrollView>
    )
};

const styles = Mainstyles;

export default HistoryofpatternsScreen;
