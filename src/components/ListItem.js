import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { weatherType } from "../utils/weatherType";
import moment from "moment/moment";

const ListItem = (props) => {
  console.log("props");
  console.log(props);
  const { dt_txt, min, max, condition } = props;
  const { item, temp, date, dateTextWrapper } = styles;

  return (
    <View style={item}>
      <Feather
        name={weatherType[condition[0]?.main]?.icon}
        size={50}
        color="white"
      />

      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>

      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "indianred",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
});
export default ListItem;
