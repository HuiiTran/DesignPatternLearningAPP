/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated } from 'react-native';

export const Mainstyles = StyleSheet.create({
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
    bugcontenttext: {
        color: 'black',
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10,
        fontWeight: 'bold',
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
        height: 250,
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