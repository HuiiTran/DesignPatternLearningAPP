/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Singleton_En } from '../assets/data/Singleton.js';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import { Mainstyles } from './Style.js';
import ReturnButton from './ReturnButton.js';
const SingletonScreen = ({navigation, route}) => {
    const [isNext, setIsNext] = useState(true);

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
    const Singleton_Vn_Screen = Singleton_En;
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
            {num_content_text(Singleton_Vn_Screen.RelationswithOtherPatterns[2])}
            {num_content_text(Singleton_Vn_Screen.RelationswithOtherPatterns[3])}
            {dot_content_text(Singleton_Vn_Screen.RelationswithOtherPatterns[4])}

            <ReturnButton isNext={isNext} title={'Adapter'} onPress={() => navigation.navigate('Adapter')}></ReturnButton>
            <ReturnButton isNext={!isNext} title={'Prototype'} onPress={() => navigation.navigate('Prototype')}></ReturnButton>
            <View style={{height:30}}></View>

        </ScrollView>
    );
};

const styles = Mainstyles;

export default SingletonScreen;
