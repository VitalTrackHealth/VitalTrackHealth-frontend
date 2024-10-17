import { Stack } from "expo-router";

const FoodLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="search-food" options={{ headerShown: false }} />
      <Stack.Screen name="food-details" />
    </Stack>
  );
};

export default FoodLayout;
