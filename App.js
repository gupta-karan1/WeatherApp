import React, { useState } from "react";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

const App = () => {
  const [loading, setLoading] = useState(true);
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
