/* eslint-disable prettier/prettier */
import { View, Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const ReturnButton = ({isNext, title, onPress}) => {
  
  const buttonStyle = isNext ? styles.nextButton : styles.returnButton
  return (
    <View>
      {isNext === true ? (
      <View>
        <Text style={{alignSelf: 'flex-end', color: '#E74C3C', fontWeight: 'bold', fontSize: 16}}>READ NEXT</Text>
      <TouchableOpacity
          style = {[styles.button, buttonStyle]} onPress={onPress}>
            
              <View style={{ flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 15,
                alignSelf: 'center'}}>
                  
        <Text style={styles.text}>{title}</Text>
        <Image style={{width: 50, height: 45,}} source={require("../assets/images/ArrowsButton/right-arrow.png")}/>
        <Text> </Text>
      </View>
          </TouchableOpacity>
          </View>
          )
          :
          (
            <View>
        <Text style={{alignSelf: 'flex-start', color: '#BCC2C6', fontWeight: 'bold',fontSize: 16}}>RETURN</Text>
      <TouchableOpacity
          style = {[styles.button, buttonStyle]} onPress={onPress}>
            
              <View style={{ flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 15,
                alignSelf: 'center'}}>
        <Image style={{width: 50, height: 45,}} source={require("../assets/images/ArrowsButton/left-arrow.png")}/>
        <Text style={styles.text}>{title}</Text>
        <Text> </Text>
      </View>
          </TouchableOpacity>
          </View>
          )}
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  button:{
    width:'70%',
    borderRadius:6,
    height:50,
    justifyContent:'center',
    flex: 1,
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