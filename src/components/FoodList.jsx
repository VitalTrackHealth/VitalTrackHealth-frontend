import { FlatList, View, Pressable } from "react-native";

import FoodCard from "./FoodCard";
import { createStyles, padding } from "@/styles";

const FoodList = ({ foodItems, onItemPress }) => {
  const renderItem = ({ item }) => (
    <Pressable onPress={() => onItemPress(item)}>
      <FoodCard foodItem={item} onPress={onItemPress} />
    </Pressable>
  );

  return (
    <FlatList
      data={foodItems}
      renderItem={renderItem}
      //   keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = createStyles({
  list: {
    paddingHorizontal: padding.lg,
  },
  separator: {
    height: 5,
  },
});

export default FoodList;
