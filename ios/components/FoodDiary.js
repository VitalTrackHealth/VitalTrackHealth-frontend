import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Image,
} from "react-native";
import { ScrollView } from "react-native";

const ExpandableCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleExpansion = () => {
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, item.values.length * 20 + 10], // Adjust as needed
  });

  return (
    <TouchableOpacity onPress={toggleExpansion} style={styles.card}>
      <Text style={styles.cardTitle}>{item.key}</Text>
      <Animated.View
        style={[styles.cardContent, { height: heightInterpolate }]}
      >
        {item.values.map((value, index) => (
          <Text key={index} style={styles.cardText}>
            {value}
          </Text>
        ))}
      </Animated.View>
    </TouchableOpacity>
  );
};

const FoodDiary = () => {
  const data = [
    { key: "Breakfast", values: ["eggs 1500kc", "bacon 300kc"] },
    { key: "Lunch", values: ["rice 2000kc", "beans 700kc"] },
    { key: "Dinner", values: ["chicken 3000kc", "salad 500kc"] },
    // Add more meals as needed
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ExpandableCard item={item} />}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContent: {
    overflow: "normal",
  },
  cardText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default FoodDiary;
