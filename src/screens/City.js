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
const City = () => {
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
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={imageLayout}
        source={require("../../assets/images/city-background.jpg")}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={"8000"}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"10:46:58am"}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"17:28:15pm"}
            bodyTextStyles={riseSetText}
          />
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
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
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
    marginTop: 30,
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
