import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

function Loader() {
  return (
    <View style={styles.container}>
        <ActivityIndicator color="black" size={50}/>
    </View>
  )
}

export default Loader

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    }
})