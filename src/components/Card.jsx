import { StyleSheet, View } from 'react-native'
import React from 'react'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            height:10,
            width:10,
            
        },
        elevation:5,
        shadowOpacity: 1,
        shadowRadius:1
    }
})