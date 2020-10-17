import React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";

const FormikTextInput = ({ name, secure, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  console.log(meta.touched);
  console.log(meta.error);

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        secure={secure}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: "#d73a4a",
  },
});

export default FormikTextInput;
