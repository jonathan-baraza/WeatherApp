/* eslint-disable prettier/prettier */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
//screens
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import Counter from "../demonstration/Counter";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",

        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "tomato",
        },
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
        name={"current"}
        component={CurrentWeather}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
        name={"upcoming"}
        component={UpcomingWeather}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
        name={"city"}
        component={City}
      />
      {/* <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"more-vertical"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
        name={"demo"}
        component={Counter}
      /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
