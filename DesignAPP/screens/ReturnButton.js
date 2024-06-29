import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ReturnButton = ({isNext, onPress}) => {
  const title = isNext ? 'Read Next' : 'Return';
  const buttonStyle = isNext ? styles.nextButton : styles.returnButton
  return (
    <TouchableOpacity
    style = {[styles.button, buttonStyle]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  button:{
    width:'70%',
    borderRadius:6,
    height:50,
    justifyContent:'center'
  },
  nextButton:{
    color:'white',
    backgroundColor:'#E74C3C',
    alignSelf:'flex-end',
  },
  returnButton:{
    backgroundColor:'#BCC2C6',
    alignSelf:'flex-start',
  },
  text:{
    alignSelf:'center',
    fontSize:20,
    color:'white',
}

})

export default ReturnButton