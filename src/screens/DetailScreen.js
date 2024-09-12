import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { SongExplanation } from '../components/SongComponent';

const   DetailScreen = (props) => {
    const { route } = props;
    const song = route.params.item;

    useEffect(() => {
        console.log(song)
    }, [])

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.songContainer}>
            {/* hold the image */}
            <View style={styles.middle}>
                <Image
                    style={styles.image}
                    source={{ uri: song.imageLink}}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{song.title}</Text>
            </View>
            <SongExplanation
                name="Singer"
                value={song.singer}/>
            <SongExplanation
                name="Year"
                value={song.year}/>
            <SongExplanation
                name="Genre"
                value={song.genre}/>
            <SongExplanation
                name="Song Writers"
                value={song.songwriters}/>
            <SongExplanation
                name="Rating"
                isRating={true}
                rating={song.rating}/>
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
    mainContainer: {
        // alignItems: 'center',
        flex: 1,
    },

    image: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'salmon',
        marginTop: 20
    },

    middle : {
        alignItems: 'center'
    },

    titleContainer: {
        padding: 8,
        paddingBottom: 16,
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default DetailScreen;