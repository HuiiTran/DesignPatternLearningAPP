/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Singleton_En } from '../assets/datas/Singleton.js'
import { PinchGestureHandler, State } from 'react-native-gesture-handler'
const SingletonScreen = ({navigation, route}) => {
    const content_text = (itext) =>{
        return(
            <Text style={styles.content}>
                - {itext}
            </Text>
        );
    };
    const highlight_content_text = (itext) =>{
        return(
            <Text style={styles.content_highlight}>
                {itext}
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
                <Image source={imageLink} />
            </View>
        );
    };
    const Singleton_En_Screen = Singleton_En;
    return (
        <ScrollView>
            {header_text('Overview')}
            {header1_text('Tên mẫu:')}
            {content_text(Singleton_En_Screen.Overview_1)}
            {image_content(Singleton_En_Screen.Image_1)}
            {header1_text('Phân loại:')}
            {content_text(Singleton_En_Screen.Overview_2)}
            {header1_text('Mục đích:')}
            {content_text(Singleton_En_Screen.Overview_3)}
            {content_text(Singleton_En_Screen.Overview_4)}
            {content_text(Singleton_En_Screen.Overview_5)}

            {header_text('Motivation')}
            {content_text(Singleton_En_Screen.Motivation_1)}
            {content_text(Singleton_En_Screen.Motivation_2)}
            {content_text('Ví dụ: ' + Singleton_En_Screen.Motivation_3)}

            {header_text('Characteristics')}
            {header1_text('Ý nghĩa từng thành viên:')}
            {content_text(Singleton_En_Screen.Characteristics_1)}
            {content_text(Singleton_En_Screen.Characteristics_2)}
            {content_text(Singleton_En_Screen.Characteristics_3)}

            {header_text('Consequences')}
            {header1_text('Ý nghĩa từng thành viên:')}
            {header1_text('Ưu điểm:')}
            {content_text(Singleton_En_Screen.Consequences_1)}
            {content_text(Singleton_En_Screen.Consequences_2)}
            {content_text(Singleton_En_Screen.Consequences_3)}
            {header1_text('Nhược điểm:')}
            {content_text(Singleton_En_Screen.Consequences_4)}
            {content_text(Singleton_En_Screen.Consequences_5)}

            {header_text('Reality/Installation')}
            {highlight_content_text(Singleton_En_Screen.Reality_1)}
            {content_text(Singleton_En_Screen.Reality_2)}
            {highlight_content_text(Singleton_En_Screen.Reality_3)}
            {content_text(Singleton_En_Screen.Reality_4)}
            {highlight_content_text(Singleton_En_Screen.Reality_5)}
            {content_text(Singleton_En_Screen.Reality_6)}
            {highlight_content_text(Singleton_En_Screen.Reality_7)}
            {content_text(Singleton_En_Screen.Reality_8)}
            {highlight_content_text(Singleton_En_Screen.Reality_9)}
            {content_text(Singleton_En_Screen.Reality_10)}
            {highlight_content_text(Singleton_En_Screen.Reality_11)}
            {content_text(Singleton_En_Screen.Reality_12)}

            {header_text('Relations with Other Patterns')}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    header1: {
        fontWeight: 'bold',
        color: 'black',
    },
    content: {
        color: 'black',
    },
    content_highlight: {
        color: 'blue',
    },
})

export default SingletonScreen