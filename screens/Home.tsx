import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TouchableOpacityBase,
} from "react-native";
import List from "../components/List";
import Grid from "../components/Grid";
import developers from "../data/developers.json";
import { globalStyles } from "../components/Layout";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

enum ViewType {
  List = "list",
  Grid = "grid",
}

const Home = () => {
  const [view, setView] = useState<ViewType>(ViewType.List);
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.headerTitle}>Dev Connect</Text>
      <View style={globalStyles.contentContainer}></View>
      <View style={globalStyles.contentContainer}>
        <View style={globalStyles.contentNav}>
          <View></View>
          <TouchableOpacity
            onPress={() =>
              setView(view === ViewType.List ? ViewType.Grid : ViewType.List)
            }
          >
            {view === ViewType.List ? (
              <FontAwesome name="th-list" size={24} color="black" />
            ) : (
              <Ionicons name="grid" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <FlatList
          numColumns={view === ViewType.List ? 1 : 2}
          key={view}
          keyExtractor={(item) => item.id}
          data={developers}
          renderItem={({ item }) =>
            view === ViewType.List ? (
              <List
                title={item.name}
                description={`${item.title}, ${item.company}`}
              />
            ) : (
              <View style={styles.col}>
                <Grid
                  name={item.name}
                  title={`${item.title}, ${item.company}`}
                  avatar={item.avatar}
                />
              </View>
            )
          }
        />
      </View>
    </View>
  );
};

const { width } = Dimensions.get("screen");
const contentWidth =
  width -
  (globalStyles.container.padding * 2 +
    globalStyles.contentContainer.padding * 2);

const styles = StyleSheet.create({
  col: {
    maxWidth: contentWidth / 2,
  },
});

export default Home;
