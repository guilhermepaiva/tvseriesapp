import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'



const TVSerieEpisodeScreen = ({route, navigation}) => {

    const serie = route.params["id"];
    console.log(serie);


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ paddingLeft: 20, color: "blue", fontSize: 15 }}>Back</Text>
            </TouchableOpacity>
            <View style={styles.episodeDetailWrapper}>
                <Text style={{ fontSize: 20, fontWeight: '800'}}>Episode: {serie.number} - Season: {serie.season}</Text> 
                    <Text style={{ fontSize: 18, fontWeight: '600', paddingVertical: 20 }}>{serie.name}</Text>
                
                {
                    serie.image ? <Image source={{uri: serie.image.medium}} style={styles.image} /> : null
                }
                
                <Text style={{ fontSize: 18, fontWeight: '600', paddingVertical: 10 }}>Summary</Text>
                
                
                
                <Text>{serie.summary.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
                
                

            </View>

        </View>
    )
}

export default TVSerieEpisodeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    episodeDetailWrapper: {
        padding: 20,
    },
    image:{
        width: '90%',
        height: 200,
    }
})
