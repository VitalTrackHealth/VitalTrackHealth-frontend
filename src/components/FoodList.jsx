import { FlatList, View, Pressable } from "react-native";

import FoodCard from "./FoodCard";
import { createStyles, padding } from "@/styles";

const styles = createStyles({
  list: {
    paddingHorizontal: padding.lg,
  },
  separator: {
    height: 5,
  },
});

const FoodList = ({ foodEntries, onItemPress }) => {
  const renderItem = ({ item }) => (
    <Pressable onPress={() => onItemPress(item)}>
      <FoodCard entry={item} onPress={onItemPress} />
    </Pressable>
  );

  return (
    <FlatList
      data={foodEntries}
      renderItem={renderItem}
      //   keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default FoodList;
