import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";

import IconText from "../components/IconText";

const City = () => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetText,
    riseSetWrapper,
    rowLayout,
    imageLayout,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city-background.jpg")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>United Kingdom</Text>

        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"white"}
            bodyText={"8000"}
            bodyTextStyles={populationText}
          />
        </View>

        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"07:46:55am"}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"17:00:15pm"}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 20,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 30,
    marginLeft: 10,
    color: "white",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
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
