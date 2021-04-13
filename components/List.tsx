import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

interface ListProps {
  title: string;
  description?: string;
}

const List: FunctionComponent<ListProps> = ({ title, description }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    borderBottomColor: "#adadad",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#003c96",
  },
  description: {
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "700",
  },
});

export default List;
