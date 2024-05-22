import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import COLORS from '../constants/colors';
import { ProgressBar } from 'react-native';

const Patientpage = () => {
    return(
        <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
            <Image
                source={require('../assets/logo-no-background.png')}
                style={{width: 350, height: 200, alignSelf: 'center'}}
                resizeMode="contain"
            />

            <AnimatedCircularProgress
                size={150}
                width={12}
                fill={80}
                tintColor= '#007260'
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#C1C7C9"
            >
                {() => (
                    <AnimatedCircularProgress
                        size={110}
                        width={12}
                        fill={40}
                        tintColor="#00e0ff"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#C1C7C9"
                    >
                        {() => (
                            <AnimatedCircularProgress 
                                size={70} // smaller size so it fits inside the other circles
                                width={12}
                                fill={60} // adjust this value as needed
                                tintColor="#ff0000" // different color so it's visible
                                onAnimationComplete={() => console.log('inner onAnimationComplete')}
                                backgroundColor="#C1C7C9"
                            />

                           
                        )}
                    </AnimatedCircularProgress>
                    
                )}
            </AnimatedCircularProgress>

            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 10}}>1540kc</Text>


        </View>

        
    )
}

export default Patientpage