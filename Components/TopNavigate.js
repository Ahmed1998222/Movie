import React from 'react';
import { Text, View , TouchableOpacity } from 'react-native';
 
import Styles from '../Config/StyleApp'

const TopNavigate = ({ navigation, GetMovieList , Filter , setFilter}) => {


    return (
       
        <View style={Styles.Row}>
        <View style={Filter == 'upcoming' ? Styles.CategoryContainerSelect : Styles.CategoryContainer}>
            <TouchableOpacity onPress={() => {
                GetMovieList(2)
                setFilter('upcoming')
            }}>
                <Text style={Filter == 'upcoming' ? Styles.CategoryTextSelect : Styles.CategoryText}>  upcoming</Text>
             </TouchableOpacity>
        </View>
        <View style={Filter == 'Popular' ? Styles.CategoryContainerSelect : Styles.CategoryContainer}>
            <TouchableOpacity onPress={() => {
                GetMovieList(3)
                setFilter('Popular')

            }}>

                <Text style={Filter == 'Popular' ? Styles.CategoryTextSelect : Styles.CategoryText}>  Popular</Text>
            </TouchableOpacity>
        </View>
        <View style={Filter == 'Top' ? Styles.CategoryContainerSelect : Styles.CategoryContainer}>
            <TouchableOpacity onPress={() => {
                GetMovieList(5)
                setFilter('Top')

            }}>

                <Text style={Filter == 'Top' ? Styles.CategoryTextSelect : Styles.CategoryText}>  Top Rated</Text>
            </TouchableOpacity>
        </View>
    </View>

    );
}

export default TopNavigate;
