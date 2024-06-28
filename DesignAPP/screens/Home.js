/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated, ImageComponent } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Home_En } from '../assets/data/Home';
import { Mainstyles } from './Style';
import StyleButton from './StyleButton';



const HomeScreen = ({navigation, route}) => {
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
            <Text style={styles.smallHeader}>
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
            {bigHeader_text('DESIGN')}
            {smallHeader_text('PATTERNS')}

            {image_content(Home_En_Screen.Image[0])}
            {content_text(Home_En_Screen.Definition[0])}
            <StyleButton buttonText={'What’s a design pattern?'} onPress={() => navigation.navigate('WhatisDesignPatternScreen')}></StyleButton>
            

            <Text style = {styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/bookmark.png')}/>
                {header1_text('Catalog of patterns')}
            </Text>
            {image_content(Home_En_Screen.Image[1])}
            {content_text(Home_En_Screen.CatalogOfPatterns[0])}
            <StyleButton buttonText={'Look inside the catalog >>'} onPress={() => navigation.navigate('Catalog')}></StyleButton>

            <Text style = {styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/puzzle.png')}/>
                {header1_text('Benefits of patterns')}
            </Text>
            {image_content(Home_En_Screen.Image[2])}
            {content_text(Home_En_Screen.BenefitsOfPatterns[0])}
            <StyleButton buttonText={'More about the benefits >>'}></StyleButton>

            <Text style = {styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/classification.png')}/>
                {header1_text('Classification')}
            </Text>
            {image_content(Home_En_Screen.Image[3])}
            {content_text(Home_En_Screen.Classification[0])}
            <StyleButton buttonText={'More about the categories >>'}></StyleButton>

            <Text style = {styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/hourglass.png')}/>
                {header1_text('History of patterns')}
            </Text>
            {image_content(Home_En_Screen.Image[4])}
            {content_text(Home_En_Screen.HistoryOfPatterns[0])}
            <StyleButton buttonText={'More about the history >>'}></StyleButton>

            <Text style = {styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/brokenheart.png')}/>
                {header1_text('Criticism of patterns')}
            </Text>
            {image_content(Home_En_Screen.Image[5])}
            {content_text(Home_En_Screen.CriticismOfPatterns[0])}
            <StyleButton buttonText={'More about the criticism >>'}></StyleButton>

            <Text style = {styles.header1}>
                <Image style={styles.header_icon} source={require('../assets/icon/star.png')}/>
                {header1_text('Dive Into Design Patterns')}
            </Text>
            {image_content(Home_En_Screen.Image[6])}
            {content_text(Home_En_Screen.DesignPattern[0])}
            <StyleButton buttonText={'Learn more about the book'}></StyleButton>

            <View style={{height:30}}></View>

        </ScrollView>
    )
};

const styles = Mainstyles;

export default HomeScreen;
