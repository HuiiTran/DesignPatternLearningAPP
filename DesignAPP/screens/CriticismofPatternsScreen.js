/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated, ImageComponent } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Home_En } from '../assets/data/Home';
import { Mainstyles } from './Style';
import StyleButton from './StyleButton';



const CriticismofPatternsScreen = ({navigation, route}) => {
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
            {smallHeader_text('Criticism of patterns')}

            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
                It seems like only lazy people haven’t criticized design patterns yet. Let’s take a look at the most typical arguments against using patterns.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28,
                fontWeight: 'bold'}}>
            Kludges for a weak programming language
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            Usually the need for patterns arises when people choose a programming language or a technology that lacks the necessary level of abstraction. In this case, patterns become a kludge that gives the language much-needed super-abilities.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            For example, the <Text style={{fontWeight: 'bold'}}>Strategy</Text> pattern can be implemented with a simple anonymous (lambda) function in most modern programming languages.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28,
                fontWeight: 'bold'}}>
            Inefficient solutions
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            Patterns try to systematize approaches that are already widely used. This unification is viewed by many as a dogma, and they implement patterns “to the letter”, without adapting them to the context of their project.            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28,
                fontWeight: 'bold'}}>
            Unjustified use
            </Text>
            <Text style={{color: '#e74c3c',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28,
                fontWeight: 'bold',
                fontStyle: 'italic'}}>
            If all you have is a hammer, everything looks like a nail.
            </Text>
            <Text style={{color: '#444444',
                fontSize: 15,
                marginTop: 20,
                marginLeft:10,
                lineHeight:28}}>
            This is the problem that haunts many novices who have just familiarized themselves with patterns. Having learned about patterns, they try to apply them everywhere, even in situations where simpler code would do just fine.
            </Text>
        </ScrollView>
    )
};

const styles = Mainstyles;

export default CriticismofPatternsScreen;
