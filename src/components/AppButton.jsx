import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: "#0366d6",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexBasis: 1,
    flexGrow: 0,
    alignSelf: "flex-start",
  },
  buttonForm: {
    elevation: 8,
    backgroundColor: "#0366d6",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    textTransform: "capitalize",
    color: "#ffffff",
  },
});

const AppButton = (props) => {
  return (
    <TouchableOpacity
      style={props.buttonForm ? styles.buttonForm : styles.button}
      onPress={props.onPress}
    >
      <Text fontSize="subheading" style={styles.buttonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonForm: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
};

export default AppButton;
