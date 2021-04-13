import React, { FunctionComponent } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

const bg = require("../assets/blue-scape-2d.jpg");

const Layout: FunctionComponent<any> = ({ children }) => {
  return (
    <ImageBackground source={bg} style={{ width: "100%", height: "100%" }}>
      <View style={globalStyles.container}>{children}</View>
    </ImageBackground>
  );
};

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    paddingBottom: 40,
  },
  headerTitle: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
  },
  contentContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(256, 256, 256, 0.9)",
    marginTop: 20,
    maxHeight: "90%",
  },
  contentNav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Layout;
