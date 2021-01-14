import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import useRestaurant from '../hooks/useRestaurant';

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [restaurantApi, restaurant] = useRestaurant(id);

    if (!restaurant) {
        return null;
    }

    return <View>
        <Text style={styles.textStyle}>{restaurant.name}</Text>
        <FlatList
            data={restaurant.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return <Image style={styles.imageStyle} source={{ uri: item }}/>
            }}
        />
    </View>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    imageStyle: {
        height: 256,
        width: '100%',
        marginVertical: 10,
        alignSelf: 'center'
    }
});

export default ResultsShowScreen;