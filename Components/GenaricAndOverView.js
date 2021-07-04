import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Geners from './Geners';

import Styles from '../Config/StyleApp'

const GenaricAndOverView = ({Data}) => {


    return (
        <View>
            <View>
                <Text style={Styles.Title_Left}>Overview</Text>
                <Text style={Styles.overview}>
                    {Data.overview}
                </Text>
            </View>
            <View>
                <Text style={Styles.Title_Left}>Geners</Text>
                < FlatList
                    numColumns={3}
                    data={Data.genres}
                    renderItem={
                        ({ item }) =>
                            <Geners name={item.name}

                            />}
                />
            </View>
        </View>
    );
}

export default GenaricAndOverView;
