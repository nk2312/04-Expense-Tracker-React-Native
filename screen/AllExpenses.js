import React, { useContext } from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpenseContext } from "../store/store";
import Card from "../components/UI/Card";

export default function AllExpenses() {
  const expenseCtx = useContext(ExpenseContext);

  let content = <Card title="No Expenses Found ..Please Add something!!!!" />;
  if (expenseCtx.expenses.length > 0) {
    content = (
      <ExpensesOutput period="Total Sum" expenses={expenseCtx.expenses} />
    );
  }
  return <>{ content }</>;
}
