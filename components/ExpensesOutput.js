import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { StyleSheet, View } from "react-native";




export default function ExpensesOutput({period,expenses}) {
 
  return (
    <View style={styles.container}>
      <ExpensesSummary expensePeriod={period} expenses={expenses}/>
      <ExpensesList data={expenses}/>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#f3c291',
    flex:1
  }
})