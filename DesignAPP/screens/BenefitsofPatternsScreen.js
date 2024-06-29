/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated, ImageComponent } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Home_En } from '../assets/data/Home';
import { Mainstyles } from './Style';
import StyleButton from './StyleButton';



const BenefitsofPatternsScreen = ({navigation, route}) => {
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
            {smallHeader_text('Why should I learn patterns?')}

            
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>The truth is that you might manage to work as a programmer for many years without knowing about a single pattern. A lot of people do just that. Even in that case, though, you might be implementing some patterns without even knowing it. So why would you spend time learning them?</Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
                    - Design patterns are a toolkit of
                    <Text style={{fontWeight: 'bold'}}> tried and tested solutions </Text>
                    to common problems in software design. Even if you never encounter these problems, knowing patterns is still useful because it teaches you how to solve all sorts of problems using principles of object-oriented design.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            - Design patterns define a common language that you and your teammates can use to communicate more efficiently. You can say, “Oh, just use a Singleton for that,” and everyone will understand the idea behind your suggestion. No need to explain what a singleton is if you know the pattern and its name.
            </Text>
        </ScrollView>
    )
};

const styles = Mainstyles;

export default BenefitsofPatternsScreen;
