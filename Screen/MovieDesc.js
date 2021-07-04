import React, { useState, useEffect } from 'react';
import { Text,  View,  ScrollView, FlatList, Image,  ActivityIndicator } from 'react-native';
import { calcHeight, calcWidth } from '../Config/Dimension';
import Header from '../Components/Header';
import Styles from '../Config/StyleApp';
import AppStyles from '../Config/Fontstyles';
import Credites from '../Components/Credites'
import GenaricAndOverView from '../Components/GenaricAndOverView'

const MovieDesc = ({ navigation, route }) => {
    const [loading, setLoding] = useState(false)

    const [Data, setData] = useState([])
    

    function getPercentage() { 
        return Math.floor(Math.random() * 100) + 1
    }

    const getMovieDesc = async (id) => {
        setLoding(true)
        if (id == undefined || id == null) {
            id = 2
        }

 

        return fetch('https://api.themoviedb.org/3/movie/' + route.params.id + '?api_key=4f298a53e552283bee957836a529baec', {
            method: 'GET',


        }).then((response) => response.json())
            .then((responseJson) => {

                setData(responseJson)
                setLoding(false)
            })
            .catch((error) => {
                console.log(error)
                setLoding(false)



            })

    }
    useEffect(() => {
        getMovieDesc()
    }, [])
    return (

        <ScrollView style={{ flex: 1, backgroundColor: "white" }}
            contentContainerStyle={{ paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}>
            <Header Title='MoviesDec' navigation={navigation} />
            
            {loading == true ?
                <ActivityIndicator size={"large"} color={AppStyles.Color.Green} style={Styles.Loader} />
                :
                Data.success != false ?

                <View style={Styles.ViewContainer}>
                    <View style={{ width: '100%', backgroundColor: 'white' }}>

                        {Data.poster_path != '' || Data.poster_path != null ?
                            <Image source={{ uri: 'https://image.tmdb.org/t/p/w500' + Data.poster_path }}
                                style={{
                                    width: calcWidth(200), height: calcHeight(300),
                                    alignSelf: 'center', backgroundColor: 'white',
                                    borderRadius: calcWidth(10)
                                }}
                                resizeMode={'contain'}
                            /> :
                            <Image source={{ uri: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg' }}
                                style={{
                                    width: calcWidth(200), height: calcHeight(300),
                                    alignSelf: 'center', backgroundColor: 'white',
                                    borderRadius: calcWidth(10)
                                }}
                                resizeMode={'contain'}
                            />

                        }
                    </View>
                    <View>
                        <Text style={Styles.TitleFilm}>{Data.original_title}</Text>
                        <Text style={Styles.Percentage}>{getPercentage()} %</Text>

                    </View>

                   <GenaricAndOverView Data={Data}/>
                    <Credites/>
            
                </View>
            
        :
        <View>
            <Text style={Styles.fieldMessage}>Field data please choose another movie and we will fix it as soon as possible </Text>
            </View>}
        </ScrollView>
    );
}

export default MovieDesc;
