import { FlatList, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();

  const tempOnItemPress = (item) => {
    navigation.navigate("FoodDetailScreen", { foodItem: item });
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => tempOnItemPress(item)}>
      <FoodCard entry={item} onPress={tempOnItemPress} />
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
