import axios from "axios"

const URL='https://react-native-3f815-default-rtdb.firebaseio.com/'

export async function sendRequest(expenseData){
    const response=await axios.post(URL+'expenses.json',expenseData);
    const id=response.data.name;
    return id

}


export async function fetchData() {
    const response = await axios.get(URL + '/expenses.json');
  console.log(response.data)
    const expenses = [];
  
    for (const key in response.data) {
      const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        desc: response.data[key].desc
      };
      expenses.push(expenseObj);
    }
  
    return expenses;
  }

  export  function updateItem(id,expenseData){

    return axios.put(URL+`expenses/${id}.json`,expenseData)

  }

  export function deleteItem(id){
    return axios.delete(URL+`expenses/${id}.json`)
  }