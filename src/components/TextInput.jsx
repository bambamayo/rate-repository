import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const TextInput = ({ style, error, secure, ...props }) => {
  const textInputStyle = [
    styles.loginInput,
    style,
    error ? styles.loginInputError : "",
  ];

  return (
    <NativeTextInput
      style={textInputStyle}
      {...props}
      secureTextEntry={secure}
    />
  );
};

const styles = StyleSheet.create({
  loginInput: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 0.5,
    width: "100%",
    fontSize: 16,
  },
});

TextInput.propTypes = {
  error: PropTypes.bool.isRequired,
};

export default TextInput;
