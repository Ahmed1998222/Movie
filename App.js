
import React from 'react';
 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieList from './Screen/MovieList'
import MovieDesc from './Screen/MovieDesc'

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer >

      <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
          name="MovieList"
          component={MovieList}
        />
        
        <Stack.Screen
          name="MovieDesc"
          component={MovieDesc}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 

export default App;
