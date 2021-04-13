import React, { FunctionComponent } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const avatarIcon = require("../assets/person.png");

interface GridProps {
  name: string;
  avatar?: string;
  title: string;
}
const Grid: FunctionComponent<GridProps> = ({ name, avatar, title }) => {
  console.log(require("../assets/person.png"));
  return (
    <View style={styles.container}>
      <View style={styles.thumbnail}>
        <Image
          source={avatar ? { uri: avatar } : avatarIcon}
          style={styles.img}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    margin: 10,
  },
  thumbnail: {
    overflow: "hidden",
    borderRadius: 10,
    position: "relative",
  },
  img: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#003c96",
  },
  title: {
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "700",
  },
});

export default Grid;
