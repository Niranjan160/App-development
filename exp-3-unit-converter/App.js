import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FormBox from "./components";
export default function App() {
  return (
    // Use the View component as a container for the app
    <View style={styles.container}>
      <FormBox />
    </View>
  );
}
// Define the styles object that contains the style properties for the app
const styles = StyleSheet.create({
  container: {
    flex: 1, // Set the flex property to 1 to make the container fill the available space
    backgroundColor: "#fff", // white
    justifyContent: "center", //to align the child elements vertically in the center
  },
});
