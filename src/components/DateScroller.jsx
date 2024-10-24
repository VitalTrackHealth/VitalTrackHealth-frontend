import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "@/components/Card";
import { colors, padding, fonts, margin } from "@/styles";

const DateScroller = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    onDateChange(selectedDate);
  }, [selectedDate]);

  const changeDate = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  const formatDate = (date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <Card style={styles.cardContainer}>
      <View style={styles.container}>
        <Pressable onPress={() => changeDate(-1)} style={styles.arrowLeft}>
          <Ionicons name="chevron-back" size={24} />
        </Pressable>
        <Text style={styles.dateText}>{formatDate(selectedDate)}</Text>
        <Pressable onPress={() => changeDate(1)} style={styles.arrowRight}>
          <Ionicons name="chevron-forward" size={24} />
        </Pressable>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: padding.sm,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrowLeft: {
    padding: padding.md,
    color: colors.lightNeutral.darkest,
    alignSelf: "flex-start",
  },
  arrowRight: {
    padding: padding.md,
    color: colors.lightNeutral.darkest,
    alignSelf: "flex-end",
  },
  dateText: {
    color: colors.lightNeutral.darkest,
    fontSize: fonts.lg,
    fontWeight: "bold",
    marginHorizontal: margin.md,
  },
});

export default DateScroller;
