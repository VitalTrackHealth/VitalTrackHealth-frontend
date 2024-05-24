import React from "react";
import { View, Text, FlatList } from "react-native";

const FoodDiary = () => {
  const data = [
    { key: "Breakfast", values: ["eggs 1500kc", "bacon 300kc"] },
    { key: "Lunch", values: ["rice 2000kc", "beans 700kc"] },
    { key: "Dinner", values: ["chicken 3000kc", "salad 500kc"] },
    // Add more meals as needed
  ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontSize: 20 }}>{item.key}</Text>
            {item.values.map((value, index) => (
              <Text key={index}>{value}</Text>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default FoodDiary;
// Export any functions or classes that need to be accessed from other files
