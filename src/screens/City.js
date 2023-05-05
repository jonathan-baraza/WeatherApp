import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import IconText from "../components/IconText";
import moment from "moment";
const City = ({ weatherData }) => {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    riseSetWrapper,
    populationText,
    riseSetText,
    rowLayout,
    imageLayoutWrapper,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={imageLayout}
        source={require("../../assets/images/city-background.jpg")}
      >
        <View style={imageLayoutWrapper}>
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName={"user"}
              iconColor={"red"}
              bodyText={`Population: ${population}`}
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName={"sunrise"}
              iconColor={"white"}
              bodyText={moment(sunrise).format("h:mm:ss a")}
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName={"sunset"}
              iconColor={"white"}
              bodyText={moment(sunset).format("h:mm:ss a")}
              bodyTextStyles={riseSetText}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight || 0,
    flex: 1,
  },
  imageLayout: {
    flex: 1,
  },
  imageLayoutWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  cityName: {
    fontSize: 40,
    marginBottom: 10,
  },
  countryName: {
    fontSize: 30,
    marginBottom: 20,
  },
  cityText: {
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
  },
  bgWrapper: {
    flex: 1,
  },
  populationWrapper: {
    justifyContent: "center",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 50,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
