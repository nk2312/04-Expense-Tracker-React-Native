import { Children, createContext, useReducer } from "react";
import { Switch } from "react-native";
const DUMMY_DATA = [
  {
    id: "1",
    desc: " kitchen food essential",
    amount: 50,
    date: new Date("2023-02-15"),
  },
  {
    id: "2",
    desc: "Mobile Recharge",
    amount: 20,
    date: new Date("2023-02-07"),
  },
  {
    id: "3",
    desc: "Wifi Recharge",
    amount: 250,
    date: new Date("2023-03-05"),
  },
  {
    id: "4",
    desc: "Shopping",
    amount: 102,
    date: new Date("2023-03-21"),
  },
  {
    id: "5",
    desc: "Gym",
    amount: 25,
    date: new Date("2023-03-20"),
  },
  {
    id: "6",
    desc: "flat rent",
    amount: 32,
    date: new Date("2023-01-05"),
  },
];

export const ExpenseContext = createContext({
  addExpense: () => {},
  deleteExpense: (id) => {},
  update: (id, {}) => {},
});

function expenseReducer(state,action){
    switch (action.type) {
        case 'ADD':
            return [action.payload.data,...state]
        case 'DELETE':
            const filteredData=state.filter(expense=>expense.id!==action.payload.id)
            return filteredData
        case 'UPDATE':
            const index=state.findIndex(expense=>expense.id==action.payload.expenseData.id);
            const indexItemObj=state[index];
            const array=[...state];
            array[index]=action.payload.expenseData
            return array;
        default:
            state
    }
}

export const ExpenseContextProvider = ({children}) => {
  const [expenseState, dispatchExpense] = useReducer(
    expenseReducer,
    DUMMY_DATA
  );

  function addExpense(expenseData){
    const data={...expenseData,id:Math.random()*10}
    dispatchExpense({type:'ADD',payload:{data}})
  }

  function deleteExpense(id){
    dispatchExpense({type:'DELETE',payload:{id}})
  }

  function update(expenseData){
    dispatchExpense({type:'UPDATE',payload:{expenseData}})
  }
  
  const value = {
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    update: update,
    expenses: expenseState,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
