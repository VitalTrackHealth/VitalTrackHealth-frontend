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
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Reset hours to compare dates properly
    today.setHours(0, 0, 0, 0);
    yesterday.setHours(0, 0, 0, 0);
    tomorrow.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);

    if (compareDate.getTime() === today.getTime()) return "Today";
    if (compareDate.getTime() === tomorrow.getTime()) return "Tomorrow";
    if (compareDate.getTime() === yesterday.getTime()) return "Yesterday";

    // Format as "Oct 25th" for other dates
    const suffix = getDaySuffix(date.getDate());
    return date
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
      .replace(/\d+/, date.getDate() + suffix);
  };

  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
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
