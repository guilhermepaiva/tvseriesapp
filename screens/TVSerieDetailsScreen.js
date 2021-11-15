import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import api from '../services/api'
import TVSerieSeasonsScreen from './TVSerieSeasonsScreen'


const TVSerieDetailsScreen = ({ route, navigation }) => {

    const serieId = route.params["id"]
    const urlSeason = 'shows/' + serieId + "/seasons"
    const urlTVSerie = 'shows/' + serieId
    
    const [tvSerie, setTVSerie] = useState({})

    useEffect(() => {
        api.get(urlTVSerie).then(response => {
            setTVSerie(response.data)
        })
    }, [])


    let summaryClean = tvSerie.summary ? tvSerie.summary.replace(/<\/?[^>]+(>|$)/g, "") : "";

    return (
        <View style={styles.tvSerieWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ paddingLeft: 20, color: "blue", fontSize: 15 }}>Back</Text>
            </TouchableOpacity>
            <ScrollView style={styles.tvSerie}>
                <Text style={styles.tvSerieTitle}>{tvSerie.name}</Text>
                {
                    tvSerie.image ? <Image source={{ uri: tvSerie.image.medium }} style={styles.tvSerieImage} /> : null

                }
                {
                    tvSerie.summary ? <Text style={styles.tvSerieSummary}>{summaryClean}</Text> : null
                }
                {
                    tvSerie.seasons ? <Text style={styles.tvSerieSeasons}>{tvSerie.seasons.length} Seasons</Text> : null
                }
                {
                    tvSerie.genres ? <Text style={{ paddingBottom: 10 }}><Text style={{ fontWeight: 'bold' }}>Genre:</Text> {tvSerie.genres.join(", ")}</Text> : null
                }
                {
                    tvSerie.schedule ? <Text style={{ paddingBottom: 10 }}><Text style={{ fontWeight: 'bold' }}>Every: </Text>{tvSerie.schedule.days} on {tvSerie.schedule.time}</Text> : null
                }

                <TVSerieSeasonsScreen id={serieId} />
                
            </ScrollView>
            
            
        </View>
    )
}

export default TVSerieDetailsScreen

const styles = StyleSheet.create({
    tvSerieWrapper: {
        flex: 1,
        marginTop: 100,
    },
    tvSerie: {
        width: 350,
        height: 350,
        marginTop: 20,
        marginLeft: '5%',
    },
    tvSerieTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 30,
        textAlign: 'center',
    },
    tvSerieImage: {
        width: 350,
        height: 350,
        borderRadius: 10,
    },
    tvSerieSummary: {
        fontSize: 15,
        paddingVertical: 20,
        
    },
    
})
