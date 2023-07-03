import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/WeatherType";

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feel,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feel}>Feels like 5</Text>

        <RowText
          messageOne={"High: 8"}
          messageTwo={"Low: 6"}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>

      <RowText
        messageOne={"It's sunny"}
        messageTwo={WeatherType["Clear"].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "beige",
    // marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feel: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 25,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 24,
  },
});

export default CurrentWeather;
