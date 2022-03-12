import React from "react";
import { View, StyleSheet } from "react-native";
const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowRadius: 6,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 16 },
    padding: 16,
    borderRadius: 16,
    backgroundColor: "white",
    elevation: 8,
  },
});
export default Card;
