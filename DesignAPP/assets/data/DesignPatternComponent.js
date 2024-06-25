import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import prototype from '../images/creationalPatterns/prototype.png'

const DesignPatternComponent = ({image, name, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={prototype} style={styles.image}></Image>
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
        backgroundColor:'blue',
        height:250
    },
    image: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: '90%',
        height:130,
        marginTop:5
    },
    text:{
        marginTop:30,
        color: '#444444',
        fontSize: 18,
        marginTop: 20,
        marginLeft:5,
        lineHeight:28,
        fontWeight:'bold'
    }
})

export default DesignPatternComponent