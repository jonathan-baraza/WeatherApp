import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);
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
          title="+1"
          style={styles.btn}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={styles.btnText}>-1</Text>
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
  btnText: {
    color: "white",
    fontSize: 15,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "flex-start",
  },
});
export default Counter;
