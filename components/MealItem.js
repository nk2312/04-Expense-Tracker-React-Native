import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet,View,Pressable,Text } from 'react-native'
import { getDateFormatted } from '../constants/date';



function MealItem({item}) {
    const navigation=useNavigation();
  
  return (
    <Pressable onPress={()=>{navigation.navigate("Manage Expenses",{
        mealId:item.id
    })}}
     style={({pressed})=>{pressed && styles.pressed}}>
    <View style={styles.container}>
    <View>
         <Text style={styles.desc}>{item.desc}</Text>
         <Text style={styles.date}>{getDateFormatted(item.date)}</Text>
     </View>
     <View style={styles.innerContainer}>
     <Text style={styles.amount}>$ {item.amount.toFixed(2)}</Text>
     </View>
    </View>
     </Pressable>
  )
}

export default MealItem


const styles=StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'grey',
        borderWidth:1,
        marginHorizontal:20,
        marginVertical:5,
        padding:10,
        borderRadius:10,
        backgroundColor:'#e28010'
        
    },
    innerContainer:{
      backgroundColor:'#fff',
      borderWidth:1,
      borderRadius:4,
      justifyContent:'center',
      borderColor:'#fff',
      minWidth:80,
      minHeight:50
    },
    desc:{textTransform:'capitalize',fontSize:18,color:'#fff'},
    date:{color:'#2b1c23',fontSize:15,fontWeight:'bold',margin:8},
    amount:{  fontWeight:'bold',
    color:'#c41d5d',fontSize:17},
    pressed:{
        opacity:0.75
    }
  })