/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated } from 'react-native';
import React from 'react';
export const Mainstyles = StyleSheet.create({
    bigHeader:{
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 95,
    },
    smallHeader:{
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#444444',
        fontSize: 67,
        marginTop:-25,
    },
    header: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 35,
        marginTop:10
    },
    header1: {
        fontWeight: 'bold',
        color: '#444444',
        fontSize: 25,
        marginTop:20,
        marginLeft:5
    },
    content: {
        color: '#444444',
        fontSize: 15,
        marginTop: 20,
        marginLeft:10,
        lineHeight:28
    },
    contentNum: {
        color: 'black',
        fontSize: 15,
        marginLeft: 10,
        marginTop: 20,
        lineHeight:28,
        marginRight:5
    },
    contentDot: {
        color: '#444444',
        fontSize: 15,
        marginLeft: 10,
        marginTop: 20,
        lineHeight:28,
        marginRight:5

    },
    bugcontenttext: {
        color: '#444444',
        fontSize: 15,
        marginLeft: 10,
        marginTop: 20,
        fontWeight: 'bold',
        lineHeight:28,
        marginRight:5
    },
    content_highlight: {
        color: 'blue',
        fontSize: 15,
        marginTop: 20,
        lineHeight:28

    },
    image_content: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: '90%',
        height: 250,
        marginTop:5
    },
    mainContainer: {
        marginLeft: 20,
        marginRight: 20,
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
    CatalogHeader:{
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        color: '#444444',
        fontSize: 50,
        marginTop:20
    }
});