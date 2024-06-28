/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated, ImageComponent } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Home_En } from '../assets/data/Home';
import { Mainstyles } from './Style';
import StyleButton from './StyleButton';



const WhatisDesignPatternScreen = ({navigation, route}) => {
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
            {smallHeader_text('What is a design pattern?')}

            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
                <Text style={{fontWeight: 'bold'}}>
                Design patterns </Text>
                <Text>
                are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.
                </Text>
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            You can’t just find a pattern and copy it into your program, the way you can with off-the-shelf functions or libraries. The pattern is not a specific piece of code, but a general concept for solving a particular problem. You can follow the pattern details and implement a solution that suits the realities of your own program.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            Patterns are often confused with algorithms, because both concepts describe typical solutions to some known problems. While an algorithm always defines a clear set of actions that can achieve some goal, a pattern is a more high-level description of a solution. The code of the same pattern applied to two different programs may be different.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            An analogy to an algorithm is a cooking recipe: both have clear steps to achieve a goal. On the other hand, a pattern is more like a blueprint: you can see what the result and its features are, but the exact order of implementation is up to you.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            What does the pattern consist of?
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>Most patterns are described very formally so people can reproduce them in many contexts. Here are the sections that are usually present in a pattern description:</Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
                    <Text style={{fontWeight: 'bold'}}>- Intent </Text>
             of the pattern briefly describes both the problem and the solution.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            <Text style={{fontWeight: 'bold'}}>- Motivation </Text>further explains the problem and the solution the pattern makes possible.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}><Text style={{fontWeight: 'bold'}}>- Structure </Text> of classes shows each part of the pattern and how they are related.</Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}><Text style={{fontWeight: 'bold'}}>- Code </Text> example in one of the popular programming languages makes it easier to grasp the idea behind the pattern.</Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>Some pattern catalogs list other useful details, such as applicability of the pattern, implementation steps and relations with other patterns.</Text>
        </ScrollView>
    )
};

const styles = Mainstyles;

export default WhatisDesignPatternScreen;
