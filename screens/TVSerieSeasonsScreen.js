import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'

import api from '../services/api'

import { useNavigation } from '@react-navigation/native';

const TVSerieSeasonsScreen = (props) => {

    const navigation = useNavigation();


    const urlSeason = 'https://api.tvmaze.com/shows/' + props.id + '/episodes';
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        api.get(urlSeason).then(response => {
            setEpisodes(response.data)
        })
    }, []);

    var myEpisodes = episodes, 
        result = myEpisodes.reduce(function(r, a) {
            r[a.season] = r[a.season] || [];
            r[a.season].push(a);
            return r;
        }, Object.create(null));

    const handleClickEpisode = (id) => {
        navigation.navigate('TVSerieEpisode', { id: id });
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' , paddingVertical: 20}}>Seasons</Text>
            {
                result && Object.keys(result).map((key, index) => {
                    
                    
                    return (
                        <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Season {key}</Text>
                        <ScrollView style={styles.seasonWrapper} horizontal={true}>
                            
                            
                            {
                                result[key].map((item, index) => {
                                    return (
                                        <TouchableOpacity style={styles.episodeWrapper} onPress={() => {handleClickEpisode(item)}}>
                                            
                                            <Text style={{ fontSize: 15, fontWeight: '600', paddingBottom: 5}}>{item.name}</Text>
                                            <Image style={{ width: 100, height: 100 }} source={{ uri: item.image.medium }} />
                                        </TouchableOpacity>
                                    )
                                }
                                )
                            }

                        </ScrollView>
                        </View>


                    )
                })
            }
           
            
        </View>
    )
}

export default TVSerieSeasonsScreen

const styles = StyleSheet.create({
    seasonWrapper: {
        paddingVertical: 30,
        
    },
    episodeWrapper: {
        width: 150,
        height: 150,
        paddingRight: 30,
        marginBottom: 20
    }
})
