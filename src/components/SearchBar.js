import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmitted }) => {
    return <View style={styles.backgroundStyle}>
        <FontAwesome style={styles.iconStyle} name="search" />
        <TextInput
            value={term}
            onChangeText={onTermChange}
            style={styles.textInputStyle}
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onTermSubmitted} />
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        padding: 4,
        flexDirection: 'row',
        marginTop: 8
    },
    textInputStyle: {
        marginLeft: 12,
        flex: 1
    },
    iconStyle: {
        fontSize: 24,
        color: 'black',
        alignSelf: 'center'
    }
});

export default SearchBar;