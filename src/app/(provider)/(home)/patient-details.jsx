import { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

import {
  Page,
  PageCell,
  TextHeader,
  Card,
  PatientsFoodEntries,
} from "@/components";
import { createStyles, padding, colors, fonts } from "@/styles";
import { fetchFoodItemsProvider } from "@/services";
import { useSession } from "@/context";

const formatTime = (epochTime) => {
  const date = new Date(epochTime * 1000);

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  const options = { month: "numeric" };
  const month = date.toLocaleString("en-US", options);

  const day = date.getDate();

  const year = String(date.getFullYear()).slice(-2);

  return `${hours}:${minutes} ${ampm} - ${month}/${day}/${year}`;
};

const PatientDetailScreen = () => {
  const { patientEmail } = useLocalSearchParams();
  const { session } = useSession();
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetchFoodItemsProvider(session, patientEmail).then((response) => {
      if (response.success) {
        const formattedFoodItems = [];
        for (const item of response.results.data) {
          const newItem = {
            label: item.food_name,
            foodId: item.food_id,
            serving: item.details.serving_size,
            nutrients: {
              CALORIES: item.details.calories,
              PROTEIN: item.details.protein,
              CARBOHYDRATE: item.details.carbohydrates,
              FAT: item.details.fat,
            },
            time: formatTime(item.added_at),
          };
          formattedFoodItems.push(newItem);
        }
        setFoodItems(formattedFoodItems);
      }
    });
  }, [patientEmail]);

  return (
    <Page>
      <PageCell>
        <TextHeader text={patientEmail} textStyle={styles.cellHeader} />
        <Card>
          <PatientsFoodEntries foodItems={foodItems} />
        </Card>
      </PageCell>
    </Page>
  );
};

const styles = createStyles({
  foodContainer: {
    padding: padding.lg,
  },
  cellHeader: {
    color: colors.lightNeutral.darkest,
    fontSize: fonts.xl,
    textAlign: "left",
  },
});

export default PatientDetailScreen;
