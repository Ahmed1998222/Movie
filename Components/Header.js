import React from 'react';
import { Text, View } from 'react-native';
import AppStyles from '../Config/Fontstyles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../Config/StyleApp'

const Header = ({ navigation, Title }) => {
 
    return (


        <View style={Styles.HeaderContainer}>
            {
                Title == 'Movies' ?
                    <Text style={Styles.HeaderTitle}>{Title}</Text>

                    :

                    <Icon name='navigate-before' size={30} color={AppStyles.Color.TEXT_GRAY}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    />


            }

        </View>
    );
}

export default Header;
