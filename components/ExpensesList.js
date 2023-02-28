import React from 'react'
import { FlatList } from 'react-native'
import MealItem from './MealItem'


function ExpensesList({data}) {

  function renderItem({item}){
    return <MealItem item={item}/>
  }

  return (
    <FlatList 
    data={data}
    renderItem={renderItem}
    keyExtractor={(item)=>{ item.id}}
    />
  )
}

export default ExpensesList
