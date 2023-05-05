import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather}
    />
  );

  const { container, image } = styles;
  return (
    <View style={container}>
      <ImageBackground
        style={image}
        source={require("../../assets/images/clouds.jpg")}
      >
    

        <FlatList
          keyExtractor={(item) => item.dt_txt}
          data={weatherData}
          renderItem={renderItem}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: "royalblue",
  },

  image: {
    flex: 1,
  },
});
export default UpcomingWeather;
