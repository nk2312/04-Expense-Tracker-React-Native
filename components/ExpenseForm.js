import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { TouchableWithoutFeedback, Keyboard ,Text} from "react-native";

function ExpenseForm({ cancelHandler, idExist, onSubmit, defaultObj }) {
  const [inputObj, setInputObj] = useState({
    amount: {
      value: defaultObj ? defaultObj.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultObj ? defaultObj.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    desc: { value: defaultObj ? defaultObj.desc : "", isValid: true },
  });

  function InputHandler(identifier, enteredValue) {
    setInputObj((prevState) => {
      return {
        ...prevState,
        [identifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const obj = {
      desc: inputObj.desc.value,
      date: new Date(inputObj.date.value),
      amount: +inputObj.amount.value,
    };


    const amountIsValid = !isNaN(obj.amount) && obj.amount >= 0;
    const dateIsValid = obj.date.toString() !== "Invalid Date";
    const descIsValid = obj.desc.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descIsValid) {
      setInputObj((prevState) => {
        return { amount: { value: prevState.amount.value, isValid: false },
         date:{ value: prevState.date.value, isValid: false }, desc:
            { value: prevState.desc.value, isValid: false 
         } };
      });
      // Alert.alert("input is wrong ")
      return
    }
   
    onSubmit(obj);
  }

  const formIsValid=inputObj.amount.isValid && inputObj.date.isValid && inputObj.desc.isValid
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View>
        {!formIsValid && <Text style={styles.inValidForm}>Entered Invalid Inputs ..Please Check!!!</Text>}
        <View style={styles.layout}>
          <Input
            label="Amount"
            invalid={!inputObj.amount.isValid}
            textConfig={{
              value: inputObj.amount.value,
              keyboardType: "decimal-pad",
              onChangeText: InputHandler.bind(this, "amount"),
            }}
          />
          <Input
            label="Date"
            invalid={!inputObj.date.isValid}
            textConfig={{
              value: inputObj.date.value,
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: InputHandler.bind(this, "date"),
            }}
          />
        </View>
        <Input
          label="Description"
          invalid={!inputObj.desc.isValid}
          textConfig={{
            value: inputObj.desc.value,
            multiline: true,
            autoCorrect: false,
            onChangeText: InputHandler.bind(this, "desc"),
          }}
        />
        <View style={styles.btnContainer}>
          <Button mode="flat" onPress={cancelHandler}>
            Cancel
          </Button>
          {!idExist ? (
            <Button onPress={submitHandler}>Add</Button>
          ) : (
            <Button onPress={submitHandler}>Update</Button>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnContainer: {
    padding: 30,
    flexDirection: "row",
  },
  inValidForm:{
    borderColor:'#9e0f20',
    color:'#dd2f2f',
    fontWeight:'bold',
    borderWidth:1,padding:10,
    borderRadius:7,
    marginHorizontal:20,
    marginVertical:20
  }
});
