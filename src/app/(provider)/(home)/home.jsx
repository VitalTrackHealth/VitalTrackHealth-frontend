import { useState, useEffect } from "react";
import { View, Pressable } from "react-native";
import { router } from "expo-router";

import { Page, PageCell, TextHeader, Card, PatientCard } from "@/components";
import { createStyles, colors, fonts, padding } from "@/styles";
import { getProviderPatients } from "@/services";
import { useUser, useSession } from "@/context";

const ProviderHomeScreen = () => {
  const { user } = useUser();
  const { session } = useSession();

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getProviderPatients(session).then((response) => {
      if (response.success) {
        response.results.data.forEach((patient) => {
          setPatients((patients) => [...patients, patient]);
        });
      }
    });
  }, []);

  const macros = {
    totalCalories: 2000,
    consumedCalories: 1500,
    totalProtein: 180,
    consumedProtein: 120,
    totalFat: 70,
    consumedFat: 50,
    totalCarbs: 150,
    consumedCarbs: 100,
  };

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
          <View style={styles.patientsContainer}>
            {patients.map((patient, index) => (
              <Pressable
                key={index}
                onPress={() => handlePatientPress(patient)}
              >
                <PatientCard
                  key={index}
                  patient={patient}
                  macros={macros}
                  cardStyle={styles.patientCard}
                />
              </Pressable>
            ))}
          </View>
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
  patientsContainer: {
    flexDirection: "row",
    margin: padding.md,
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
