import { useState, useEffect } from "react";
import { ScrollView, Pressable, View, useWindowDimensions } from "react-native";
import { router } from "expo-router";

import { Page, PageCell, TextHeader, Card, PatientCard } from "@/components";
import { createStyles, colors, fonts, padding, margin } from "@/styles";
import { getProviderPatients } from "@/services";
import { useUser, useSession } from "@/context";

const ProviderHomeScreen = () => {
  const { user } = useUser();
  const { session } = useSession();
  const { width } = useWindowDimensions();
  // Acheive this with styles not with logic
  const isNarrowScreen = width < 1100;

  const [patients, setPatients] = useState([]);

  const calculateMacrosSummary = (patient) => {
    // TODO: Calculate this weeks macros summary
    // Requires getting patient's food log for the week which needs the modified food log endpoint
    // (unless we want to get all of the food log and then filter it by week, but that would be less efficient)

    // ! This is just a placeholder, shows macro goals
    return {
      totalCalories: patient.nutrition_goals.calorie,
      consumedCalories: 1500,
      totalProtein: patient.nutrition_goals.protein,
      consumedProtein: 120,
      totalFat: patient.nutrition_goals.fat,
      consumedFat: 50,
      totalCarbs: patient.nutrition_goals.carbs,
      consumedCarbs: 100,
    };
  };

  useEffect(() => {
    getProviderPatients(session).then((response) => {
      if (response.success) {
        response.results.data.forEach((patient) => {
          // Calculate this weeks macros summary
          const macros = calculateMacrosSummary(patient);
          const patientWithMacros = {
            ...patient,
            macros: macros,
          };
          setPatients((patients) => [...patients, patientWithMacros]);
        });
      }
    });
  }, []);

  const handlePatientPress = (patient) => {
    router.push({
      pathname: "/patient-details/",
      params: { patientEmail: patient.email },
    });
  };

  return (
    <Page>
      <PageCell>
        <TextHeader text="Patients" textStyle={styles.cellHeader} />
        <Card>
          <ScrollView
            showsVerticalScrollIndicator={true}
            contentContainerStyle={styles.patientsScrollViewContainer}
          >
            <View
              style={
                isNarrowScreen
                  ? styles.narrowPatientsContainer
                  : styles.patientsContainer
              }
            >
              {patients.map((patient, index) => (
                <Pressable
                  key={index}
                  onPress={() => handlePatientPress(patient)}
                  style={
                    isNarrowScreen ? styles.narrowGridItem : styles.gridItem
                  }
                >
                  <PatientCard
                    key={index}
                    patient={patient}
                    // Unnecessary prop?
                    macros={patient.macros}
                    cardStyle={styles.patientCard}
                  />
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </Card>
      </PageCell>
      <PageCell>
        <TextHeader text="Your Provider Code" textStyle={styles.cellHeader} />
        <Card>
          <TextHeader
            text={user.providerCode}
            textStyle={styles.providerCode}
          />
        </Card>
      </PageCell>
    </Page>
  );
};

const styles = createStyles({
  cellHeader: {
    color: colors.lightNeutral.darkest,
    fontSize: fonts.xl,
    textAlign: "left",
  },
  patientsScrollViewContainer: {
    margin: padding.md,
  },
  patientsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: margin.md,
  },
  narrowPatientsContainer: {
    flexDirection: "column",
  },
  gridItem: {
    width: "49%",
    marginBottom: margin.md,
  },
  narrowGridItem: {
    width: "100%",
    marginBottom: margin.md,
  },
  patientCard: {
    marginRight: padding.md,
  },
  providerCode: {
    fontSize: fonts.lg,
    textAlign: "left",
  },
});

export default ProviderHomeScreen;
