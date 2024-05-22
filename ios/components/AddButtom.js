import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';


const AddButtom = ({onAddPress}) => {
  return (
    <TouchableOpacity style={styles.cont} onPress={onAddPress}>
      <Image
        source={{uri: "https://github.com/herodev-ch/ReactNativeDream/blob/ui/create-add-button/src/assets/icons/plus.png?raw=true"
        }
        }
        style={styles.image}
       
      />
    </TouchableOpacity>
  );
};
export default AddButtom;

const styles = StyleSheet.create({
  cont: {
   

    
    backgroundColor: "blue",
    
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

   
   
  },
  image: {
    tintColor: 'white',
    height: 35,
    width: 35,
  },
});


