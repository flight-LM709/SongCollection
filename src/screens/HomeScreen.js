import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { ButtonComponents } from '../components/ButtonComponents';
import { songData } from '../../data/SongData';

const HomeScreen = (props) => {
    const {navigation} = props;

    const [recommended, setRecommended] = useState([]);


    // sort the rating data
    const compareRating = (a, b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;

        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else {
            return 0;
        }
    };
    
    useEffect( () => {
        const sortedRecommended = [...songData].sort(compareRating);
        setRecommended(sortedRecommended)
    })

  return (
    <View style={styles.mainContainer}>
    <FlatList
        data={recommended}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={ ({ item }) => {
            return (
                <View style={styles.dataContainer}>
                    <Image
                        style={styles.songImage}
                        source={{ uri: item.imageLink }}
                    />
                    <View style={styles.songDescriptionContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.singerTextContainer}>
                            <Text style={styles.singer}>{item.singer}</Text>
                        </View>
                        
                        {/* <Text>{item.rating}</Text>*/}
                        {
                            item.rating === 5 ?
                            <Image
                                style={{
                                    width: 100,
                                    height: 20,
                                }}
                                source={require('../../assets/images/five-stars.png')}    
                            />
                            :
                            item.rating === 4 ?
                            <Image
                                style={{
                                    width: 100,
                                    height: 20,
                                }}
                                source={require('../../assets/images/four-stars.png')}    
                            />
                            :
                            item.rating === 3 ?
                            <Image
                                style={{
                                    width: 100,
                                    height: 20,
                                }}
                                source={require('../../assets/images/three-stars.png')}    
                            />
                            :
                            item.rating === 2 ?
                            <Image
                                style={{
                                    width: 100,
                                    height: 20,
                                }}
                                source={require('../../assets/images/two-stars.png')}    
                            />
                            :
                            item.rating === 1 ?
                            <Image
                                style={{
                                    width: 100,
                                    height: 20,
                                }}
                                source={require('../../assets/images/star.png')}    
                            />
                            :
                            null
                        }
                        <ButtonComponents
                            onPress={ () => console.log('You Clicked The Button!')}
                            // onPress={ () => navigation.navigate('Detail', {item})}
                        />
                    </View>
                </View>
            )
        }}
    />
    </View>
  )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    
    flatListContainer: {
        padding: 8,
    },

    dataContainer: {
        borderWidth: 2,
        borderColor: '#A6A6BD',
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },

    songImage: {
        width: 120,
        height: 120
    },

    songDescriptionContainer: {
        paddingLeft: 8,
        flex: 1,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    singerTextContainer: {
        paddingTop: 8,
        paddingBottom: 8
    },

});

export default HomeScreen;