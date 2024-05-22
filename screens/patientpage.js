import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import COLORS from '../constants/colors';
import { ProgressBar } from 'react-native';
import Patientcard from "../ios/components/patientcard";
import {LinearGradient} from 'expo-linear-gradient';
import Button from '../ios/components/Buttom';

const Patientpage = () => {
    return(

        
        <LinearGradient
            colors={['#FFFFFF', '#007260']}
            style={{flex: 1, justifyContent: 'flex-start',  paddingTop: 25,}}
        >

    <Text> Roman dI cESARE</Text>
    <Patientcard> </Patientcard>

    <Button
          title="Food Diary"
         
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />
    </LinearGradient>

    
    );
}

export default Patientpage