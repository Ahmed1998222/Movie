import React from 'react';
import { Text, View , ScrollView } from 'react-native';
 import { Avatar } from 'react-native-elements';

import Styles from '../Config/StyleApp'

const Credites = () => {
    

    return (
        
        <View>
        <Text style={Styles.Title_Left}>Credits</Text>

        <ScrollView
            horizontal={true}
             showsHorizontalScrollIndicator={false}

        >

            <View style={Styles.Row}>
                <View>
                    <Avatar
                        size="xlarge"
                        rounded
                        activeOpacity={0.01}
                        source={require('../Config/images/emma.jpg')}
                        style={Styles.circlePic}
                    />
                    <Text style={Styles.ActorText}>Emma</Text>
                </View>

                <View>
                    <Avatar
                        size="xlarge"
                        rounded
                        activeOpacity={0.01}
                        source={require('../Config/images/chris.jpg')}
                        style={Styles.circlePic}
                    />
                    <Text style={Styles.ActorText}>chris</Text>
                </View>

                <View>
                    <Avatar
                        size="xlarge"
                        rounded
                        activeOpacity={0.01}
                        source={require('../Config/images/kristin.jpg')}
                        style={Styles.circlePic}
                    />
                    <Text style={Styles.ActorText}>kristen</Text>
                </View>

                <View>
                    <Avatar
                        size="xlarge"
                        rounded
                        activeOpacity={0.01}
                        source={require('../Config/images/Leo.jpg')}
                        style={Styles.circlePic}
                    />
                    <Text style={Styles.ActorText}>Leonardo </Text>
                </View>

                <View>
                    <Avatar
                        size="xlarge"
                        rounded
                        activeOpacity={0.01}
                        source={require('../Config/images/ropert.jpg')}
                        style={Styles.circlePic}
                    />
                    <Text style={Styles.ActorText}>robert </Text>
                </View>

                <View>
                    <Avatar
                        size="xlarge"
                        rounded
                        activeOpacity={0.01}
                        source={require('../Config/images/emma.jpg')}
                        style={Styles.circlePic}
                    />
                    <Text style={Styles.ActorText}>Emma</Text>
                </View>

            </View>
        </ScrollView>
    </View>
);
}

export default Credites;
