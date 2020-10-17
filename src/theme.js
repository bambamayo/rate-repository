import Constants from "expo-constants";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  appBarContainer: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "rgba(36, 41, 46, 0.8)",
    height: 70,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
  },
  appBarTabs: {
    color: "#fff",
    paddingLeft: 20,
  },
};

export default theme;
