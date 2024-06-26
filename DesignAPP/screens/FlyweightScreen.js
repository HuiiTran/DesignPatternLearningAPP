/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Flyweight_En } from '../assets/data/Flyweight';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import { Mainstyles } from './Style';
const FlyweightScreen = ({navigation, route}) => {
    const content_text = (itext) =>{
        return(
            <Text style={styles.content}>
                {itext}
            </Text>
        );
    };
    const dot_content_text = (itext) =>{
        return(
            <Text style={styles.contentDot}>
                • {itext}
            </Text>
        );
    };
    const whitedot_content_text = (itext) =>{
        return(
            <Text style={styles.contentWhiteDot}>
                ○ {itext}
            </Text>
        );
    };
    const num_content_text = (itext) =>{
        return(
            <Text style={styles.contentNum}>
                {itext}
            </Text>
        );
    };
    const greenTick_content_text = (itext) =>{
        return(
            <Text style={styles.contentNum}>
                <Image style={styles.pros_cons_icon} source={require('../assets/icon/greenTick.png')}/>{itext}
            </Text>
        );
    };
    const redX_content_text = (itext) =>{
        return(
            <Text style={styles.contentNum}>
                <Image style={styles.pros_cons_icon} source={require('../assets/icon/redX.png')}/>{itext}
            </Text>
        );
    };
    const bug_content_text = (itext) =>{
        return(
            <Text style={styles.bugcontenttext}>
                <Image style={styles.ApplicabilityContent} source={require('../assets/icon/Applicability1.png')}/>{itext}
            </Text>
        );
    };
    const lightN_content_text = (itext) =>{
        return(
            <Text style={styles.contentNum}>
                <Image style={styles.ApplicabilityContent} source={require('../assets/icon/Applicability2.png')}/>{itext}
            </Text>
        );
    };
    const header_text = (itext) =>{
        return(
            <Text style={styles.header}>
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
    const Flyweight_En_Screen = Flyweight_En;
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
            {header_text('Flyweight')}
            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Intent.png')}/>
                {header1_text('Intent')}
            </Text>
            {content_text(Flyweight_En_Screen.Intent[0])}
            {image_content(Flyweight_En_Screen.Image[0])}


            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Problem.png')}/>
                {header1_text('Problem')}
            </Text>
            {content_text(Flyweight_En_Screen.Problem[0])}
            {content_text(Flyweight_En_Screen.Problem[1])}
            {content_text(Flyweight_En_Screen.Problem[2])}
            {image_content(Flyweight_En_Screen.Image[1])}


            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Solution.png')}/>
                {header1_text('Solution')}
            </Text>
            {content_text(Flyweight_En_Screen.Solution[0])}
            {image_content(Flyweight_En_Screen.Image[2])}
            {content_text(Flyweight_En_Screen.Solution[1])}
            {content_text(Flyweight_En_Screen.Solution[2])}
            {content_text(Flyweight_En_Screen.Solution[3])}
            {image_content(Flyweight_En_Screen.Image[4])}
            {content_text(Flyweight_En_Screen.Solution[4])}
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20, marginTop: 15,}}>Extrinsic state storage</Text>
            {content_text(Flyweight_En_Screen.Solution[5])}
            {content_text(Flyweight_En_Screen.Solution[6])}
            {image_content(Flyweight_En_Screen.Image[3])}
            {content_text(Flyweight_En_Screen.Solution[7])}
            {content_text(Flyweight_En_Screen.Solution[8])}
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20, marginTop: 15,}}>Flyweight and immutability</Text>
            {content_text(Flyweight_En_Screen.Solution[9])}
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20, marginTop: 15,}}>Flyweight factory</Text>
            {content_text(Flyweight_En_Screen.Solution[10])}
            {content_text(Flyweight_En_Screen.Solution[11])}


            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Structure.png')}/>
                {header1_text('Structure')}
            </Text>
            {image_content(Flyweight_En_Screen.Image[5])}
            {num_content_text(Flyweight_En_Screen.Structure[0])}
            {num_content_text(Flyweight_En_Screen.Structure[1])}
            {num_content_text(Flyweight_En_Screen.Structure[2])}
            {num_content_text(Flyweight_En_Screen.Structure[3])}
            {num_content_text(Flyweight_En_Screen.Structure[4])}
            {num_content_text(Flyweight_En_Screen.Structure[5])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Applicability.png')}/>
                {header1_text('Applicability')}
            </Text>
            {bug_content_text(Flyweight_En_Screen.Applicability[0])}
            {lightN_content_text(Flyweight_En_Screen.Applicability[1])}
            {whitedot_content_text(Flyweight_En_Screen.Applicability[2])}
            {whitedot_content_text(Flyweight_En_Screen.Applicability[3])}
            {whitedot_content_text(Flyweight_En_Screen.Applicability[4])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Implement.png')}/>
                {header1_text('How to Implement')}
            </Text>
            {num_content_text(Flyweight_En_Screen.HowtoImplement[0])}
            {whitedot_content_text(Flyweight_En_Screen.HowtoImplement[1])}
            {whitedot_content_text(Flyweight_En_Screen.HowtoImplement[2])}
            {num_content_text(Flyweight_En_Screen.HowtoImplement[3])}
            {num_content_text(Flyweight_En_Screen.HowtoImplement[4])}
            {num_content_text(Flyweight_En_Screen.HowtoImplement[5])}
            {num_content_text(Flyweight_En_Screen.HowtoImplement[6])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/ProsCons.png')}/>
                {header1_text('Pros and Cons')}
            </Text>
            {greenTick_content_text(Flyweight_En_Screen.Pros[0])}
            {redX_content_text(Flyweight_En_Screen.Cons[0])}
            {redX_content_text(Flyweight_En_Screen.Cons[1])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Relations.png')}/>
                {header1_text('Relations with Other Patterns:')}
            </Text>
            {dot_content_text(Flyweight_En_Screen.RelationswithOtherPatterns[0])}
            {dot_content_text(Flyweight_En_Screen.RelationswithOtherPatterns[1])}
            {dot_content_text(Flyweight_En_Screen.RelationswithOtherPatterns[2])}
            {whitedot_content_text(Flyweight_En_Screen.RelationswithOtherPatterns[3])}
            {whitedot_content_text(Flyweight_En_Screen.RelationswithOtherPatterns[4])}

        </ScrollView>
    );
};

const styles = Mainstyles;

export default FlyweightScreen;
