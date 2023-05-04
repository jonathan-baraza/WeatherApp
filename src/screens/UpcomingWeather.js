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

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [{ main: "clear" }],
  },
  {
    dt_txt: "2023-02-18 15:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [{ main: "Clouds" }],
  },
  {
    dt_txt: "2023-02-18 18:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [{ main: "Rains" }],
  },
];

const UpcomingWeather = () => {
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
        <Text>UpcomingWeather</Text>

        <FlatList
          keyExtractor={(item) => item.dt_txt}
          data={DATA}
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
