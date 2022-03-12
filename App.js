import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import StartGame from "./Screen/StartGame";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
