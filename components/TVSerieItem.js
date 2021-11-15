import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const TVSerieItem = (props) => {
    return (
        <View style={styles.tvserieContainer}>

            <View style={styles.imageWrapper}>
                <Image source={{uri: props.image}} style={{ width: 100, height: 150 }} />
            </View> 

            <View style={styles.tvserieInfo}>
                <Text style={styles.tvserieTitle}>{props.name}</Text>
                <Text style={{paddingTop: 10 }}>Rating: {props.rating}</Text>
            </View>    
            
        </View>
    )
}

export default TVSerieItem

const styles = StyleSheet.create({
    tvserieContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    tvserieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    tvserieInfo: {
        paddingLeft: 20,
    }
})
