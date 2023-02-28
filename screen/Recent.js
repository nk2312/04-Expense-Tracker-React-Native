import React, { useContext } from 'react'

import {View,Text,StyleSheet} from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput'
import { ExpenseContext } from '../store/store'
import { getDataFromSevenDays } from '../constants/date'
import Card from '../components/UI/Card'


function Recent() {
  const expenseCtx=useContext(ExpenseContext);
  
  const filteredExpenses=expenseCtx.expenses.filter(expense=>{
    const today=new Date();

    const newDay=getDataFromSevenDays(7,today)
    return expense.date>newDay
  })

  return (
    <View style={styles.container}>
      {filteredExpenses.length<=0 && <Card title="Oops ....No Recent Expense Found!!" style={styles.card}/>}
   <ExpensesOutput period="Last 7 days Sum " expenses={filteredExpenses}/>
    </View>
  )
}

export default Recent

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#e3d9a3',
    flex:1
  },
  card:{

  }
})