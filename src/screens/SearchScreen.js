import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(element => (element.price === price));
    };

    return <View style={styles.container}>
        <SearchBar
            style={{ marginHorizontal: 4 }}
            term={term}
            onTermChange={setTerm}
            onTermSubmitted={() => searchApi(term)}/>
        {errorMessage ? <TextInput>{errorMessage}</TextInput> : null}
        <Text style={{ marginHorizontal: 4 }}>We have found {results.length} results</Text>

        <ScrollView>
            <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title="Big Spender"/>
            <ResultsList navigation={navigation} results={filterResultsByPrice('$$$$')} title="Ultra Big Spender"/>
        </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flex: 1
    }
});

export default SearchScreen;