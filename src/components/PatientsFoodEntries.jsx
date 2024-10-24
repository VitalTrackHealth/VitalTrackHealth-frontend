import { View, Text, FlatList } from "react-native";

import { createStyles, colors, fonts, padding, margin } from "@/styles";

const PatientFoodEntries = ({ foodItems }) => {
  const renderTableHeader = () => (
    <View style={styles.tableRow}>
      <Text style={[styles.headerCell, styles.dateCell]}>Date</Text>
      <Text style={[styles.headerCell, styles.foodItemCell]}>Food Item</Text>
      <Text style={[styles.headerCell, styles.numericCell]}>Calories</Text>
      <Text style={[styles.headerCell, styles.numericCell]}>Protein (g)</Text>
      <Text style={[styles.headerCell, styles.numericCell]}>Fat (g)</Text>
      <Text style={[styles.headerCell, styles.numericCell]}>Carbs (g)</Text>
    </View>
  );

  const renderFoodEntry = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={[styles.cell, styles.dateCell]}>{item.time}</Text>
      <Text style={[styles.cell, styles.foodItemCell]}>{item.label}</Text>
      <Text style={[styles.cell, styles.numericCell]}>
        {Math.round(item.nutrients.CALORIES)}
      </Text>
      <Text style={[styles.cell, styles.numericCell]}>
        {Math.round(item.nutrients.PROTEIN)}
      </Text>
      <Text style={[styles.cell, styles.numericCell]}>
        {Math.round(item.nutrients.FAT)}
      </Text>
      <Text style={[styles.cell, styles.numericCell]}>
        {Math.round(item.nutrients.CARBOHYDRATE)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Entries</Text>
      {renderTableHeader()}
      <FlatList
        data={foodItems}
        renderItem={renderFoodEntry}
        keyExtractor={(item, index) => `${item.id}-${index}`}
      />
    </View>
  );
};

const styles = createStyles({
  container: {
    flex: 1,
    padding: padding.md,
    backgroundColor: colors.lightNeutral.lightest,
  },
  title: {
    fontSize: fonts.lg,
    fontWeight: "bold",
    marginBottom: margin.md,
    color: colors.lightNeutral.darkest,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightNeutral.light,
    paddingVertical: padding.sm,
  },
  headerCell: {
    fontWeight: "bold",
    color: colors.lightNeutral.darkest,
  },
  cell: {
    color: colors.lightNeutral.dark,
  },
  dateCell: {
    flex: 2,
  },
  foodItemCell: {
    flex: 3,
  },
  numericCell: {
    flex: 1,
    textAlign: "right",
  },
});

export default PatientFoodEntries;
