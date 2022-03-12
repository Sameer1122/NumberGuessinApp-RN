import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      {...props}
      placeholder={props.placeholder}
      style={{ ...styles.input, ...props.style }}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
export default Input;
