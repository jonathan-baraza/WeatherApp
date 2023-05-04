import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [countInput, setCountInput] = useState(0);
  const handleCount = (isAdding) => {
    setCount(isAdding ? count + 1 : count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterValue}>{count}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            handleCount(true);
          }}
          title="+1"
          style={styles.btn}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={styles.btnText}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleCount(false);
          }}
          style={styles.btn}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={styles.btnText}>-1</Text>
        </TouchableOpacity>
      </View>
      <View style={{  alignItems: "center" }}>
        <TextInput
          style={styles.input}
          placeholder="Enter Count"
          onChangeText={(newcount) => setCountInput(newcount)}
          value={countInput}
        />
        <TouchableOpacity
          onPress={() => {
            setCount(countInput);
          }}
          style={styles.btnTwo}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={styles.btnTextTwo}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dadada",
    color: "red",
    justifyContent: "center",
  },
  counterValue: {
    fontSize: 50,
    textAlign: "center",
    margin: 40,
  },
  btn: {
    backgroundColor: "#007acc",
    flex: 1,
    margin: 10,
    width: 100,
    padding: 10,
    alignItems: "center",
  },
  btnTwo: {
    backgroundColor: "#007acc",
    flex: 1,
    margin: 10,
    width: 100,
    padding: 10,
    alignItems: "center",
 
  },
  btnText: {
    color: "white",
    fontSize: 15,
  },
  btnTextTwo: {
    color: "white",
    fontSize: 15,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    margin: 20,
  width:200
  },
});
export default Counter;
