import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import AppButton from "./AppButton";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {() => (
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <FormikTextInput
              name="username"
              placeholder="Username"
              secure={false}
            />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secure={true}
            />
            <AppButton buttonForm={true} title="Sign in" />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "#ffffff",
    height: "50%",
    width: "100%",
  },
  form: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    alignSelf: "center",
  },
});

export default SignIn;
