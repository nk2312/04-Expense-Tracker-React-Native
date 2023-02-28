import { useNavigation } from "@react-navigation/native";
import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpenseForm from "../components/ExpenseForm";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { ExpenseContext } from "../store/store";

function ManageExpenses({ route, navigation }) {
  const id = route.params?.mealId;
  const idExist = !!id;
  const title = idExist ? "Edit Expense" : "Add New Expense";
  const expenseCtx = useContext(ExpenseContext);
  const selectedExpenseId = expenseCtx.expenses.findIndex(
    (expense) => expense.id === id
  );
  const obj = expenseCtx.expenses[selectedExpenseId];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  function deleteHandler() {
    expenseCtx.deleteExpense(id);
    navigation.goBack();
  }

  

  function updateHandler(obj) {
    if(idExist){
      expenseCtx.update({...obj,id:id});
    }
    else{
      expenseCtx.addExpense(obj);
    }
   
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Your Expense</Text>
      <ExpenseForm
        cancelHandler={cancelHandler}
        idExist={idExist}
        onSubmit={updateHandler}
        defaultObj={obj}
      />
      {idExist && (
        <>
          <View style={styles.flat}></View>
          <IconButton
            icon="trash"
            color="black"
            size={34}
            onPress={deleteHandler}
          />
        </>
      )}
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3c291",
    flex: 1,
    alignItems: "center",
  },
  flat: {
    borderBottomColor: "#c151b0",
    width: "80%",
    borderWidth: 2,

    marginHorizontal: 20,
  },
  txt: {
    fontSize: 28,
    fontWeight: "bold",
    margin: 50,
    textDecorationColor: "#ad3581",
    textDecorationLine: "underline",
  },
});
