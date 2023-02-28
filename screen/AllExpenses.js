import React, { useContext,useEffect ,useState} from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpenseContext } from "../store/store";
import Card from "../components/UI/Card";
import { fetchData } from "../constants/backend/Request";
import Loader from "../components/UI/Loader";
import Button from "../components/UI/Button";

export default function AllExpenses() {

  const [isFetching,setIsFetching]=useState(false);
  const [error,setError]=useState(false);

  

  const expenseCtx = useContext(ExpenseContext);

  useEffect(()=>{
    async function getData(){
      setIsFetching(true)
      try{
        const res=await fetchData()
        expenseCtx.setExpenses(res);
      }
      catch(error){
          setError(true)
      }
      setIsFetching(false)
    }

    getData();
  },[])

  function cancelHandler(){
    setError(false);
  }
  
  let content=<Card title="No Expenses Found ..Please Add something!!!!" />
  if(expenseCtx.expenses.length>0 ){
  content= <ExpensesOutput period="Total Sum" expenses={expenseCtx.expenses} />
  }
  if(!isFetching && error){
    content=<View>
      <Text>An error occured</Text>
      <Text>message</Text>
      <Button onPress={cancelHandler} title="cancel"/>
    </View>
  }

  return (
    <>
    {isFetching && <Loader/>}
    {content}
    </>
  )
  }
