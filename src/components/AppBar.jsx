import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  appLink: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginRight: 10,
  },
});

const AppBar = () => {
  return (
    <View style={theme.appBarContainer}>
      <ScrollView horizontal>
        <Link
          to="/"
          style={styles.appLink}
          underlayColor={theme.colors.textPrimary}
        >
          <Text
            fontWeight="bold"
            fontSize="subheading"
            style={{ color: "#fff" }}
          >
            Repositories
          </Text>
        </Link>
        <Link
          to="/signin"
          style={styles.appLink}
          underlayColor={theme.colors.textPrimary}
        >
          <Text
            fontWeight="bold"
            fontSize="subheading"
            style={{ color: "#fff" }}
          >
            Sign in
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
