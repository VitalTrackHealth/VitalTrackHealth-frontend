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
import { fetchPatientFoodEntries } from "@/services";

const PatientDetailScreen = () => {
  const { patientEmail } = useLocalSearchParams();
  const [foodEntries, setFoodEntries] = useState([]);

  useEffect(() => {
    const loadFoodEntries = async () => {
      try {
        const entries = await fetchPatientFoodEntries(patientEmail);
        setFoodEntries(entries);
      } catch (error) {
        console.error("Error fetching food entries:", error);
      }
    };

    loadFoodEntries();
  }, [patientEmail]);

  return (
    <Page>
      <PageCell>
        <TextHeader text={patientEmail} textStyle={styles.cellHeader} />
        <Card>
          <PatientsFoodEntries foodEntries={foodEntries} />
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
