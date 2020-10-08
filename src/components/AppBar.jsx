import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import Text from "./Text";
import theme from "../theme";

// const styles = StyleSheet.create({
//   container: {
//     height: 50,
//     backgroundColor: "rgba(0, 0, 0, 0.8)",
//     justifyContent: "center",
//   },
//   header: {
//     color: "#fff",
//     marginLeft: 10,
//   },
// });

const AppBar = () => {
  return (
    <View style={theme.appBarContainer}>
      <TouchableWithoutFeedback>
        <Text style={theme.appBarTabs} fontSize="subheading" fontWeight="bold">
          Repositories
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;
