import React from "react";
import { SafeAreaView } from "react-native";
import AppBar from "./src/components/AppBar";
import Main from "./src/components/Main";

const App = () => {
  return (
    <SafeAreaView>
      <AppBar />
      <Main />
    </SafeAreaView>
  );
};

export default App;
