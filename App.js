import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllExpenses from "./screen/AllExpenses";
import Recent from "./screen/Recent";
import { Ionicons } from "@expo/vector-icons";
import ManageExpenses from "./screen/ManageExpenses";
import IconButton from "./components/UI/IconButton";
import { ExpenseContextProvider } from "./store/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomNavigator = createBottomTabNavigator();

  function BottomNavigatorHandler() {
    return (
      <BottomNavigator.Navigator
        screenOptions={({navigation})=>{return {
          headerStyle: { backgroundColor: "#a9a924" },
          headerTintColor: "rgb(229, 20, 100)",
          tabBarStyle: { backgroundColor: "#a9a924" },
          tabBarActiveTintColor: "#c41d5d",
          tabBarInactiveTintColor:'grey',
          headerRight:({tintColor})=>{return  <IconButton icon="add" color={tintColor} size={25} onPress={()=>{navigation.navigate("Manage Expenses")}}/>}
        }}}
      >
        <BottomNavigator.Screen
          name="All Expenses"
          component={AllExpenses}
          options={{
            tabBarLabel:'All Expenses',
            tabBarIcon: () => {
              return <Ionicons name="hourglass" size="24" color="white" />;
            },
          }}
        />
        <BottomNavigator.Screen
          name="Recent"
          component={Recent}
          options={{
            tabBarIcon: () => {
              return <Ionicons name="calendar" size="24" color="white" />;
            },
          }}
        />
      </BottomNavigator.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />

     <ExpenseContextProvider>
     <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name="Expenses Overview"
            component={BottomNavigatorHandler}
            options={{ headerShown: false, headerRight: () => (
              <Ionicons
                onPress={() => alert('This is a button!')}
                name="add"
                color="#fff"
                size="34"
              />
            ) }}
          />
          <Stack.Screen name="Manage Expenses" component={ManageExpenses} options={{
            headerStyle:{backgroundColor:'#a9a924'},
            headerTintColor:'#c41d5d',
            presentation:'modal'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
     </ExpenseContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
