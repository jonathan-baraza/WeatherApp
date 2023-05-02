import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const City = () => {
  return (
    <View>
      <Text>City</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
export default City;
