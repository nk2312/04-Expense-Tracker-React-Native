import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'

function ExpensesSummary({expensePeriod,expenses}) {
  
    const sum=expenses.reduce((sum,expense)=>{return sum+expense.amount},0)



  return (
    <View style={styles.container}>
        <Text style={styles.period}>{expensePeriod}</Text>
        <Text style={styles.sum}>$ {sum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary

const styles=StyleSheet.create({
    container:{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:20,
      borderWidth:2,
      borderColor:'grey',
      margin:20,
      borderRadius:10,
      elevation:4,
      shadowColor:'black',
      shadowOpacity:0.4,
      backgroundColor:'#cda127'

    },
    period:{
        fontSize:22,
        textTransform:'capitalize',
        letterSpacing:2,
        color:'#fff'

    },
    sum:{
      fontSize:20,
      fontWeight:'bold',
      color:'#fff'
    }
})