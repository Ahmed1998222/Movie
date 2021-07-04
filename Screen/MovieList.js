import React, { useState, useEffect } from 'react';
import {   View, ScrollView, FlatList,   ActivityIndicator } from 'react-native';
import Header from '../Components/Header';
import Styles from '../Config/StyleApp'
import MovieCard from '../Components/MovieCard'
import AppStyles from '../Config/Fontstyles';
import TopNavigate from '../Components/TopNavigate';
const MovieList = ({ navigation }) => {
    const [loading, setLoding] = useState(false)
    const [Filter, setFilter] = useState('upcoming')

    const [Data, setData] = useState([])


    const GetMovieList = async (id) => {
        setLoding(true)
        if (id == undefined || id == null) {
            id = 2
        }


        return fetch('https://api.themoviedb.org/3/movie/' + id + '/lists?api_key=4f298a53e552283bee957836a529baec', {
            method: 'GET',


        }).then((response) => response.json())
            .then((responseJson) => {

                setData(responseJson.results)
                setLoding(false)
            })
            .catch((error) => {
                console.log(error)
                setLoding(false)



            })

    }

    useEffect(() => {
        GetMovieList()
    }, [])
    return (

        <ScrollView
            style={Styles.ScrollView}
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}>
            <View style={Styles.sticky}>
                <Header Title='Movies' navigation={navigation} />

                <TopNavigate Filter={Filter} GetMovieList={GetMovieList} setFilter={setFilter} />


            </View>
            <View style={Styles.ViewContainer}>

                {loading == true ?

                    <ActivityIndicator size={"large"} color={AppStyles.Color.Green} style={Styles.Loader} />
                    :
                    < FlatList

                        data={Data}
                        renderItem={
                            ({ item }) =>
                                <MovieCard name={item.name}
                                    list_type={item.list_type}
                                    id={item.id}
                                    imageFilm={item.poster_path}
                                    navigation={navigation}
                                />}
                    />
                }

            </View>



        </ScrollView>
    );
}

export default MovieList;
