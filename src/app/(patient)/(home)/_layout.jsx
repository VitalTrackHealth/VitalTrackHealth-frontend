import { Stack } from "expo-router";

const FoodLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="food" options={{ headerShown: false }} />
    </Stack>
  );
};

export default FoodLayout;
