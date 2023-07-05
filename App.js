import React, { useState, useEffect } from "react";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, setLoading] = useState(true);
  // const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      );
      const data = await res.json();
      setWeather(data);
    } catch (e) {
      setError("Couldn't load weather data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  // console.log(WEATHER_API_KEY);

  if (weather) {
    console.log(weather);
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={"chocolate"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
