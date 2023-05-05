import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utils/weatherType";
const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyle,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;

  console.log("weatherData");
  console.log(weatherData);
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0].main;
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={tempStyle}>{temp}</Text>
        <Text style={feels}>{feels_like}</Text>

        <RowText
          messageOne={`High: ${temp_max}`}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <View style={bodyWrapper}>
        <RowText
          messageOne={weather[0].description}
          messageTwo={weatherType[weatherCondition].message}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    // marginTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyle: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    paddingLeft: 15,
    marginBottom: 20,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 25,
  },
});

export default CurrentWeather;
