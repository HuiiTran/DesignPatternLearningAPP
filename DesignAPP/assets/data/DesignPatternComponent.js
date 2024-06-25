import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const DesignPatternComponent = ({image, name, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={image} style={styles.image}></Image>
        <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'column',
        alignContent:'center',
        borderWidth:0.2,
        width:'48.5%',
        alignItems:'center',
        height:240,
    },
    image: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: '90%',
        height:130,
        marginTop:10
    },
    text:{
        marginTop:30,
        color: '#444444',
        fontSize: 18,
        marginTop: 10,
        lineHeight:28,
        fontWeight:'bold',
        textAlign:'center'
    }
})

export default DesignPatternComponent