/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Singleton_Vn } from '../assets/data/Singleton.js';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
const SingletonScreen = ({navigation, route}) => {
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
            <Text style={styles.contentNum}>
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
            <View>
                <Image style={styles.image_content} source={imageLink} />
            </View>
        );
    };
    const Singleton_Vn_Screen = Singleton_Vn;
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
            {header_text('Singleton')}
            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Intent.png')}/>
                {header1_text('Intent')}
            </Text>
            {content_text(Singleton_Vn_Screen.Intent[0])}
            {image_content(Singleton_Vn_Screen.Image[0])}


            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Problem.png')}/>
                {header1_text('Problem')}
            </Text>
            {content_text(Singleton_Vn_Screen.Problem[0])}
            {num_content_text(Singleton_Vn_Screen.Problem[1])}
            {num_content_text(Singleton_Vn_Screen.Problem[2])}
            {num_content_text(Singleton_Vn_Screen.Problem[3])}
            {image_content(Singleton_Vn_Screen.Image[1])}

            {num_content_text(Singleton_Vn_Screen.Problem[4])}
            {num_content_text(Singleton_Vn_Screen.Problem[5])}
            {num_content_text(Singleton_Vn_Screen.Problem[6])}
            {content_text(Singleton_Vn_Screen.Problem[7])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Solution.png')}/>
                {header1_text('Solution')}
            </Text>
            {content_text(Singleton_Vn_Screen.Solution[0])}
            {dot_content_text(Singleton_Vn_Screen.Solution[1])}
            {dot_content_text(Singleton_Vn_Screen.Solution[2])}
            {content_text(Singleton_Vn_Screen.Solution[3])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/RealWorld.png')}/>
                {header1_text('Real-World Analogy')}
            </Text>
            {content_text(Singleton_Vn_Screen.RealWorldAnalogy[0])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Structure.png')}/>
                {header1_text('Structure')}
            </Text>
            {image_content(Singleton_Vn_Screen.Image[4])}
            {num_content_text(Singleton_Vn_Screen.Structure[0])}
            {num_content_text(Singleton_Vn_Screen.Structure[1])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Applicability.png')}/>
                {header1_text('Applicability')}
            </Text>
            {bug_content_text(Singleton_Vn_Screen.Applicability[0])}
            {lightN_content_text(Singleton_Vn_Screen.Applicability[1])}
            {bug_content_text(Singleton_Vn_Screen.Applicability[2])}
            {lightN_content_text(Singleton_Vn_Screen.Applicability[3])}
            {content_text(Singleton_Vn_Screen.Applicability[4])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Implement.png')}/>
                {header1_text('How to Implement')}
            </Text>
            {num_content_text(Singleton_Vn_Screen.HowtoImplement[0])}
            {num_content_text(Singleton_Vn_Screen.HowtoImplement[1])}
            {num_content_text(Singleton_Vn_Screen.HowtoImplement[2])}
            {num_content_text(Singleton_Vn_Screen.HowtoImplement[3])}
            {num_content_text(Singleton_Vn_Screen.HowtoImplement[4])}
            {num_content_text(Singleton_Vn_Screen.HowtoImplement[5])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/ProsCons.png')}/>
                {header1_text('Pros and Cons')}
            </Text>
            {greenTick_content_text(Singleton_Vn_Screen.Pros[0])}
            {greenTick_content_text(Singleton_Vn_Screen.Pros[1])}
            {greenTick_content_text(Singleton_Vn_Screen.Pros[2])}
            {redX_content_text(Singleton_Vn_Screen.Cons[0])}
            {redX_content_text(Singleton_Vn_Screen.Cons[1])}
            {redX_content_text(Singleton_Vn_Screen.Cons[2])}
            {redX_content_text(Singleton_Vn_Screen.Cons[3])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Relations.png')}/>
                {header1_text('Relations with Other Patterns:')}
            </Text>
            {dot_content_text(Singleton_Vn_Screen.RelationswithOtherPatterns[0])}
            {dot_content_text(Singleton_Vn_Screen.RelationswithOtherPatterns[1])}
            {content_text(Singleton_Vn_Screen.RelationswithOtherPatterns[2])}
            {content_text(Singleton_Vn_Screen.RelationswithOtherPatterns[3])}
            {dot_content_text(Singleton_Vn_Screen.RelationswithOtherPatterns[4])}

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 30,
    },
    header1: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 30,
    },
    content: {
        color: 'black',
        fontSize: 15,
        marginTop: 15,
    },
    contentNum: {
        color: 'black',
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10,
    },
    contentDot: {
        color: 'black',
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10,
    },
    content_highlight: {
        color: 'blue',
        fontSize: 15,
        marginTop: 10,
    },
    image_content: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: '90%',
        fontSize: 15,
    },
    mainContainer: {
        marginLeft: 15,
        marginRight: 15,
    },
    pros_cons_icon:{
        width: 15,
        height: 15,
    },
    header_icon:{
        width: 35,
        height: 35,
    },
    ApplicabilityContent:{
        width: 30,
        height: 30,
    },
});

export default SingletonScreen;
