import React from 'react';
import { Text, View } from 'react-native';
 
import Styles from '../Config/StyleApp'

const Geners = ({ name}) => {


    return (
        <View style={ [Styles.CategoryContainer , Styles.margin_5]}>
          

                <Text style={ Styles.CategoryText}>  {name}</Text>
         </View>
    );
}

export default Geners;
