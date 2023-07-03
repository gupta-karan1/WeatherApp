import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";

import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_txt: "2021-03-01 12:00:00",
    main: {
      temp_max: 10,
      temp_min: 5,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2021-03-02 15:00:00",
    main: {
      temp_max: 12,
      temp_min: 7,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },

  {
    dt_txt: "2021-03-02 18:00:00",
    main: {
      temp_max: 15,
      temp_min: 4,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2021-03-02 20:00:00",
    main: {
      temp_max: 12,
      temp_min: 7,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={image}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0, // for android to push the content below the status bar (if any)
    backgroundColor: "beige",
  },

  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
