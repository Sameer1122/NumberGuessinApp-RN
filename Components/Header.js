import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Number Guessinp App</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingTop: 36,
    backgroundColor: "steelblue",
    height: 90,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
export default Header;
