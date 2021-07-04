import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { calcHeight, calcWidth } from '../Config/Dimension'

import Styles from '../Config/StyleApp'

const MovieCard = ({ navigation, name, id, list_type , imageFilm }) => {
    function randomDate() {
        var dob;

        //set a range of years
        var min = 1990;
        var max = 2021;

        // Math.ceil prevents the value from being 0;
        var month = Math.ceil(Math.random() * 12);
        var day = Math.ceil(Math.random() * 28);
        var year = Math.floor(Math.random() * (max - min) + min);

        //this ensures that the format will stay mm/dd/yyyy;
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        //concatenates random dob in mm/dd/yyyy format;
        dob = month + "/" + day + "/" + year;
         return dob;
    }


    function getPercentage() {
        return Math.floor(Math.random() * 100) + 1
    }

    return (
        <TouchableOpacity 
        onPress={() => {
            navigation.navigate("MovieDesc" , {
                id:id
            })     
             }}
        >
            <View style={{ width: '100%' }}>
                <View style={Styles.Card}>
                    <View style={Styles.ContainerImage} >
                        {imageFilm == null || imageFilm == undefined || imageFilm =='' ?

                        <Image source={require('../Config/images/P1.jpg')}
                            style={Styles.image}
                            resizeMode={'cover'}
                        />
                        :
                        <Image source={{uri:'https://image.tmdb.org/t/p/w500/'+imageFilm}}
                            style={Styles.image}
                            resizeMode={'cover'}
                        />

                    }
                    </View>
                    <View style={Styles.textContainerCard}>
                        <Text numberOfLines={1} style={Styles.FilmName}>{name}</Text>
                        <Text style={Styles.FilmDate}>{randomDate()}</Text>
                        <View style={Styles.CategoryType}>
                            <Text style={Styles.CategoryText}>  {list_type}</Text>

                        </View>
                        <Text style={Styles.FilmPercentage}>{getPercentage()} %</Text>

                    </View>


                </View>
            </View>
        </TouchableOpacity>
    );
}

export default MovieCard;
