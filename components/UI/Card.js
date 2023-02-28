import React from 'react'
import { StyleSheet, Text ,View} from 'react-native'

function Card({title,style}) {
  return (
    <View style={[styles.container,style]}>
        <Text style={styles.txt}>{title}</Text>
    </View>
  )
}

export default Card

const styles=StyleSheet.create({
    container:{
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.4,
        padding:20,
        borderRadius:10
    },txt:{
        fontWeight:'bold',
        fontSize:20,
        color:'#e62424'
    }
})