/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import StyleButton from './StyleButton';
import ReturnButton from './ReturnButton';

import { Visitor_En } from '../assets/data/Visitor';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import { Mainstyles } from './Style';
import Accordion from './Accordion';
const VisitorScreen = ({navigation, route}) => {
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
    const Visitor_En_Screen = Visitor_En;
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
            {header_text('Visitor')}
            <Text style={styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/Intent.png')}/>
                {header1_text('Intent')}
            </Text>
            {content_text(Visitor_En_Screen.Intent[0])}
            {image_content(Visitor_En_Screen.Image[0])}


            <Text style={styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/Problem.png')}/>
                {header1_text('Problem')}
            </Text>
            {content_text(Visitor_En_Screen.Problem[0])}
            {image_content(Visitor_En_Screen.Image[1])}
            {content_text(Visitor_En_Screen.Problem[1])}
            {content_text(Visitor_En_Screen.Problem[2])}
            {image_content(Visitor_En_Screen.Image[2])}
            {content_text(Visitor_En_Screen.Problem[3])}
            {content_text(Visitor_En_Screen.Problem[4])}

            <Text style={styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/Solution.png')}/>
                {header1_text('Solution')}
            </Text>
            {content_text(Visitor_En_Screen.Solution[0])}
            {content_text(Visitor_En_Screen.Solution[1])}
            {image_content(Visitor_En_Screen.Image[3])}
            {content_text(Visitor_En_Screen.Solution[2])}
            {image_content(Visitor_En_Screen.Image[4])}
            {content_text(Visitor_En_Screen.Solution[3])}
            {content_text(Visitor_En_Screen.Solution[4])}
            {image_content(Visitor_En_Screen.Image[5])}
            {content_text(Visitor_En_Screen.Solution[5])}
            {content_text(Visitor_En_Screen.Solution[6])}


            <Text style={styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/RealWorld.png')}/>
                {header1_text('Real-World Analogy')}
            </Text>
            {image_content(Visitor_En_Screen.Image[6])}
            {content_text(Visitor_En_Screen.RealWorldAnalogy[0])}
            {dot_content_text(Visitor_En_Screen.RealWorldAnalogy[1])}
            {dot_content_text(Visitor_En_Screen.RealWorldAnalogy[2])}
            {dot_content_text(Visitor_En_Screen.RealWorldAnalogy[3])}

            <Text style={styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/Structure.png')}/>
                {header1_text('Structure')}
            </Text>
            {image_content(Visitor_En_Screen.Image[7])}
            {num_content_text(Visitor_En_Screen.Structure[0])}
            {num_content_text(Visitor_En_Screen.Structure[1])}
            {num_content_text(Visitor_En_Screen.Structure[2])}
            {num_content_text(Visitor_En_Screen.Structure[3])}
            {num_content_text(Visitor_En_Screen.Structure[4])}


            <Text style={styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/Applicability.png')}/>
                {header1_text('Applicability')}
            </Text>
            {bug_content_text(Visitor_En_Screen.Applicability[0])}
            {lightN_content_text(Visitor_En_Screen.Applicability[1])}
            {bug_content_text(Visitor_En_Screen.Applicability[2])}
            {lightN_content_text(Visitor_En_Screen.Applicability[3])}
            {bug_content_text(Visitor_En_Screen.Applicability[4])}
            {lightN_content_text(Visitor_En_Screen.Applicability[5])}

            <Text style={styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/Implement.png')}/>
                {header1_text('How to Implement')}
            </Text>
            {num_content_text(Visitor_En_Screen.HowtoImplement[0])}
            {num_content_text(Visitor_En_Screen.HowtoImplement[1])}
            {num_content_text(Visitor_En_Screen.HowtoImplement[2])}
            {num_content_text(Visitor_En_Screen.HowtoImplement[3])}
            {num_content_text(Visitor_En_Screen.HowtoImplement[4])}
            {content_text(Visitor_En_Screen.HowtoImplement[5])}
            {num_content_text(Visitor_En_Screen.HowtoImplement[6])}

            <Text style={styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/ProsCons.png')}/>
                {header1_text('Pros and Cons')}
            </Text>
            {greenTick_content_text(Visitor_En_Screen.Pros[0])}
            {greenTick_content_text(Visitor_En_Screen.Pros[1])}
            {greenTick_content_text(Visitor_En_Screen.Pros[2])}

            {redX_content_text(Visitor_En_Screen.Cons[0])}
            {redX_content_text(Visitor_En_Screen.Cons[1])}

            <Text style={styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/Relations.png')}/>
                {header1_text('Relations with Other Patterns:')}
            </Text>
            {dot_content_text(Visitor_En_Screen.RelationswithOtherPatterns[0])}
            {dot_content_text(Visitor_En_Screen.RelationswithOtherPatterns[1])}
            {dot_content_text(Visitor_En_Screen.RelationswithOtherPatterns[2])}

            <ReturnButton isNext={isNext} title={'Home'} onPress={() => navigation.navigate('Home')}></ReturnButton>
            <ReturnButton isNext={!isNext} title={'Template Method'} onPress={() => navigation.navigate('Template Method')}></ReturnButton>
            <View style={{height:30}}></View>

        </ScrollView>
    );
};
const data = [
    { title: 'Drawer 1', navigateTo: 'Drawer1' },
    { title: 'Drawer 2', navigateTo: 'Drawer2' },
    { title: 'Drawer 3', navigateTo: 'Drawer3' },
];
const styles = Mainstyles;

export default VisitorScreen;
