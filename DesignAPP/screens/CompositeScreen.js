/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Composite_En } from '../assets/data/Composite';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import { Mainstyles } from './Style';
import ReturnButton from './ReturnButton';
const CompositeScreen = ({navigation, route}) => {
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
    const Composite_En_Screen = Composite_En;
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
            {header_text('Composite')}
            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Intent.png')}/>
                {header1_text('Intent')}
            </Text>
            {content_text(Composite_En_Screen.Intent[0])}
            {image_content(Composite_En_Screen.Image[0])}


            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Problem.png')}/>
                {header1_text('Problem')}
            </Text>
            {content_text(Composite_En_Screen.Problem[0])}
            {content_text(Composite_En_Screen.Problem[1])}
            {content_text(Composite_En_Screen.Problem[2])}
            {image_content(Composite_En_Screen.Image[1])}
            {content_text(Composite_En_Screen.Problem[3])}


            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Solution.png')}/>
                {header1_text('Solution')}
            </Text>
            {content_text(Composite_En_Screen.Solution[0])}
            {content_text(Composite_En_Screen.Solution[1])}
            {image_content(Composite_En_Screen.Image[2])}
            {content_text(Composite_En_Screen.Solution[2])}


            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/RealWorld.png')}/>
                {header1_text('Real-World Analogy')}
            </Text>
            {image_content(Composite_En_Screen.Image[3])}
            {content_text(Composite_En_Screen.RealWorldAnalogy[0])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Structure.png')}/>
                {header1_text('Structure')}
            </Text>
            {image_content(Composite_En_Screen.Image[4])}
            {num_content_text(Composite_En_Screen.Structure[0])}
            {num_content_text(Composite_En_Screen.Structure[1])}
            {num_content_text(Composite_En_Screen.Structure[2])}
            {num_content_text(Composite_En_Screen.Structure[3])}
            {num_content_text(Composite_En_Screen.Structure[4])}
            {num_content_text(Composite_En_Screen.Structure[5])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Applicability.png')}/>
                {header1_text('Applicability')}
            </Text>
            {bug_content_text(Composite_En_Screen.Applicability[0])}
            {lightN_content_text(Composite_En_Screen.Applicability[1])}
            {bug_content_text(Composite_En_Screen.Applicability[2])}
            {lightN_content_text(Composite_En_Screen.Applicability[3])}


            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Implement.png')}/>
                {header1_text('How to Implement')}
            </Text>
            {num_content_text(Composite_En_Screen.HowtoImplement[0])}
            {num_content_text(Composite_En_Screen.HowtoImplement[1])}
            {num_content_text(Composite_En_Screen.HowtoImplement[2])}
            {num_content_text(Composite_En_Screen.HowtoImplement[3])}
            {num_content_text(Composite_En_Screen.HowtoImplement[4])}
            {num_content_text(Composite_En_Screen.HowtoImplement[5])}
            {num_content_text(Composite_En_Screen.HowtoImplement[6])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/ProsCons.png')}/>
                {header1_text('Pros and Cons')}
            </Text>
            {greenTick_content_text(Composite_En_Screen.Pros[0])}
            {greenTick_content_text(Composite_En_Screen.Pros[1])}
            {redX_content_text(Composite_En_Screen.Cons[0])}

            <Text>
                <Image style={styles.header_icon} source={require('../assets/icon/Relations.png')}/>
                {header1_text('Relations with Other Patterns:')}
            </Text>
            {dot_content_text(Composite_En_Screen.RelationswithOtherPatterns[0])}
            {dot_content_text(Composite_En_Screen.RelationswithOtherPatterns[1])}
            {dot_content_text(Composite_En_Screen.RelationswithOtherPatterns[2])}
            {dot_content_text(Composite_En_Screen.RelationswithOtherPatterns[3])}
            {dot_content_text(Composite_En_Screen.RelationswithOtherPatterns[4])}
            {dot_content_text(Composite_En_Screen.RelationswithOtherPatterns[5])}
            {num_content_text(Composite_En_Screen.RelationswithOtherPatterns[6])}
            {num_content_text(Composite_En_Screen.RelationswithOtherPatterns[7])}
            {dot_content_text(Composite_En_Screen.RelationswithOtherPatterns[8])}

            <ReturnButton isNext={isNext} title={'Decorator'} onPress={() => navigation.navigate('Decorator')}></ReturnButton>
            <ReturnButton isNext={!isNext} title={'Bridge'} onPress={() => navigation.navigate('Bridge')}></ReturnButton>
            <View style={{height:30}}></View>

        </ScrollView>
    );
};

const styles = Mainstyles;

export default CompositeScreen;
