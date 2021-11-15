import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import FavoritesScreen from './screens/FavoritesScreen';
import TVSerieDetailsScreen from './screens/TVSerieDetailsScreen';
import TVSerieEpisodeScreen from './screens/TVSerieEpisodeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

MaterialCommunityIcons.loadFont();

const App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="TVSerieDetails" component={TVSerieDetailsScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="TVSerieEpisode" component={TVSerieEpisodeScreen} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
     
export default App

const styles = StyleSheet.create({
  

})
