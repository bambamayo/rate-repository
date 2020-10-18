import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { useField } from "formik";

import Text from "./Text";

const FormikTextInput = ({ name, secure, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [field, meta] = useField(name);

  console.log(meta);

  const textInputStyle = [
    styles.formikInput,
    meta.touched && meta.error ? styles.formikInputError : null,
  ];

  return (
    <>
      <TextInput style={textInputStyle} secureTextEntry={secure} {...props} />
      {meta.touched && meta.error ? (
        <Text style={styles.errorText}>{meta.error}</Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  formikInput: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 0.5,
    width: "100%",
    fontSize: 16,
  },

  formikInputError: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    borderColor: "#d73a4a",
    borderWidth: 0.5,
    width: "100%",
    fontSize: 16,
  },

  errorText: {
    marginTop: 3,
    color: "#d73a4a",
    alignSelf: "flex-start",
  },
});

export default FormikTextInput;
