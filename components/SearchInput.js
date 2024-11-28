import React from 'react';
import { View, TextInput, StyleSheet, useCallback } from 'react-native';
import { useTheme } from '../styles/ThemeProvider';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/Context';
import { debounce } from 'lodash';

const SearchInput = () => {
    const { theme } = useTheme();
    const { search, setSearch } = useAppContext();

    const debouncedChangeHandler = debounce((value)=>setSearch(value), 500)
    
    return (
        <View style={theme.searchContainer}>
            <Ionicons name="search-sharp" size={20} color="#999" style={theme.searchIcon} />
            <TextInput
                style={theme.searchInput}
                placeholder="Search"
                onChangeText={debouncedChangeHandler}
            />
        </View>
    );
};

export default SearchInput;