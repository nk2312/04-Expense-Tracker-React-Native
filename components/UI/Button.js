import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

function Button({ children, mode, onPress }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => {
          pressed && styles.pressed;
        }}
      >
        <View style={[styles.buttonText, mode && styles.flat]}>
          <Text style={styles.txt}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {},
  flat: {color:'transparent'},
  buttonText: {
    borderRadius: 8,
    backgroundColor: "#c83116",
    padding: 15,
    minWidth: 100,
    marginHorizontal:20
  },
  txt:{ color:'#fff',fontWeight:'bold',textAlign:'center'},
  pressed: { opacity: 0.75 },
});
