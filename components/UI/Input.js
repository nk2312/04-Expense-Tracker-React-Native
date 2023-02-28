import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({ label, textConfig ,invalid}) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput {...textConfig} style={[styles.input,textConfig.multiline && styles.inputMultiline,invalid && styles.invalid]} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({

  text: {color:'#e1279d',fontSize:16,marginVertical:8,marginHorizontal:18,fontWeight:'600'},
  input: {
    borderRadius:10,
    backgroundColor: "#f5ceca",
    color: "#131318",
    height: 40,
    borderRadius: 4,
    fontSize:17,
    padding:4,
    minWidth:140,
    fontWeight:'500',
    marginHorizontal:20
  },
  inputMultiline:{
    minHeight:250
  },
  invalid:{
    backgroundColor:'#e59696',
    borderColor:'#e61414',
    borderWidth:2
  }
});
