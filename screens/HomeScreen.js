
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import api from '../services/api'

import TVSerieItem from '../components/TVSerieItem'

import { useNavigation } from '@react-navigation/native'

const HomeScreen = ({ navigation }) => {

    const [data, setData] = useState(null)
    
    useEffect(() => {
        api.get('shows').then(response => {
            let result = response.data.map(show => {
                return {
                    id: show.id,
                    name: show.name,
                    image: show.image.medium,
                    rating: show.rating.average,
            
                }
            }
        )
        setData(result)
        })
    }, [])

    const handleClickTVSerie = (id) => {
        
        navigation.navigate('TVSerieDetails', { 
            id: id,
         })
    }


    
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>All TV Series</Text>
            {
                data ? (
    
                    <FlatList
                        
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.tvserieItem} onPress={() => {handleClickTVSerie(item.id)}}>
                            <TVSerieItem 
                                style={styles.tvserieItem}
                                name={item.name}
                                image={item.image}
                                rating={item.rating}
                            />
                            </TouchableOpacity>
                        )}
                    />
                    
                ) : (
                    <ActivityIndicator size="large" color="#0000ff" />
                )

            }

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        marginTop: 30
    },
    tvserieButtonWrapper: {
        margin: 10,
        marginTop: 30
    },
    
    
})
