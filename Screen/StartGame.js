import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../Components/Card";
import Input from "../Components/Input";
const StartGame = () => {
  const [enteredValue, setenteredValue] = useState("");
  const [confirm, setconfirm] = useState(false);
  const [chosenNumber, setchosenNumber] = useState();
  const addNumber = (inputText) => {
    setenteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const ResetHandler = () => {
    setenteredValue("");
    setconfirm(false);
    setchosenNumber();
  };
  const ConfirmHandler = () => {
    const selected = parseInt(enteredValue);
    if (isNaN(selected) || selected <= 0 || selected >= 100) {
      Alert.alert(
        "Invalid Value",
        "Value must be from 1 to 99",
        [
          {
            text: "okay",
            onPress: ResetHandler,
            style: "distractive",
          },
        ],
        {
          cancelable: true,
          onDismiss: ResetHandler,
        }
      );
      return;
    }
    setconfirm(true);
    setchosenNumber(selected);
    setenteredValue("");
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Input
            keyboardType="number-pad"
            style={{ width: "100%" }}
            placeholder="Please enter Number"
            onChangeText={addNumber}
            value={enteredValue}
          />
          <View style={styles.buttonflex}>
            <View style={styles.btn}>
              <Button
                title="Confirm"
                color="seagreen"
                onPress={ConfirmHandler}
              />
            </View>
            <View style={styles.btn}>
              <Button title="Reset" onPress={ResetHandler} />
            </View>
          </View>
        </Card>
        {confirm && (
          <Card style={styles.choosen}>
            <Text style={styles.choosentitle}>Your Number</Text>
            <Text style={styles.choosennumber}>{chosenNumber}</Text>
            <Button title="Start Game" />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonflex: {
    flexDirection: "row-reverse",
    marginVertical: 24,
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
  },
  btn: {
    width: 100,
  },
  choosen: {
    marginTop: 16,
    alignItems: "center",
    padding: 32,
  },
  choosentitle: {
    fontSize: 20,
    fontWeight: "400",
    color: "gray",
    marginBottom: 24,
  },
  choosennumber: {
    color: "hotpink",
    fontSize: 28,
    fontWeight: "500",
    marginBottom: 24,
  },
});

export default StartGame;
