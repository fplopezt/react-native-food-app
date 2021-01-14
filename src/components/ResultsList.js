import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {
    if (results.length === 0) {
        return null;
    }
    
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return <TouchableOpacity onPress={() => { navigation.navigate('ResultsShow', { id: item.id }) }}>
                    <ResultsDetail result={item} />
                </TouchableOpacity>;
            }}/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4
    }
});

export default withNavigation(ResultsList);