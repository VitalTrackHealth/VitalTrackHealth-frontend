import {View, Text,Pressable,  Image} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Button from '../ios/components/Buttom';
import {useNavigation} from '@react-navigation/native';
const Welcome = () => {
    const navigation = useNavigation()
    return (
        <LinearGradient
            colors={['#FFFFFF', '#007260']}
            style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 25}}
        >
             
            <Image
                source={require('../assets/logo-no-background.png')}
                style={{width: 300, height: 300}}
                resizeMode="contain"
            />
  
           

            <View style={{
                
               
                position: 'absolute',
                top: 400,
                width: '100%',
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 50,
                    fontWeight: 800,
                  
                
                
                }}> Let's get </Text>
                <Text style={{
                    color: 'white',
                    fontSize: 46,
                    fontWeight: 800,
    
                }}> started. </Text>

                <View
                    style={{
                        marginVertical: 22,
                    }}>
<Text style={{
    fontSize: 16,
    color: 'white',
    marginVertical: 4,

                }}> Creating a bridge between healthcare professionals and nutrition </Text>
                </View>
                <Button
    title="Join Now"
     onPress={() => navigation.navigate('register')}
/>

<Button
    title="Log In"
    onPress={() => navigation.navigate('login')}
/>


            </View>




        </LinearGradient>
    );
}

export default Welcome;