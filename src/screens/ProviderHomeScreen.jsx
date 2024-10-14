import { useState, useEffect } from "react";
import { View } from "react-native";

import { Page, PageCell, TextHeader, Card, PatientCard } from "@/components";
import { createStyles, colors, fonts, padding } from "@/styles";
import { getUser } from "@/services";

const styles = createStyles({
  cellHeader: {
    color: colors.lightNeutral.darkest,
    fontSize: fonts.xl,
    textAlign: "left",
  },
  patientsContainer: {
    flexDirection: "row",
    margin: padding.md,
  },
  patientCard: {
    marginRight: padding.md,
  },
});

const ProviderHomeScreen = ({ navigation }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      getUser(`test${i}@test.com`).then((patient) => {
        setPatients((patients) => [...patients, patient.results]);
      });
    }
  }, []);

  const macros = {
    totalCalories: 2000,
    consumedCalories: 1500,
    totalProtein: 100,
    consumedProtein: 80,
    totalFat: 100,
    consumedFat: 80,
    totalCarbs: 100,
    consumedCarbs: 80,
  };

  return (
    <Page>
      <PageCell>
        <TextHeader text="Overview" textStyle={styles.cellHeader} />
        <Card>
          <View style={styles.patientsContainer}>
            {patients.map((patient, index) => (
              <PatientCard
                key={index}
                patient={patient}
                macros={macros}
                cardStyle={styles.patientCard}
              />
            ))}
          </View>
        </Card>
      </PageCell>
    </Page>
  );
};

export default ProviderHomeScreen;
