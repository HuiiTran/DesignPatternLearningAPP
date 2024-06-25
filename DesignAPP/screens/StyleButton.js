import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const StyleButton = ({buttonText, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        width:'97%',
        height:50,
        backgroundColor:'#E74C3C',
        alignSelf:'center',
        borderRadius:7,
        justifyContent:'center',
        marginTop:20,
    },
    text:{
        alignSelf:'center',
        fontSize:20,
        color:'white',
    }
})

export default StyleButton