import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import MenuItem from '../components/MenuItem';
import ToggleButtonLine from '../components/ToggleButtonLine';
import HeroBanner from '../components/HeroBanner';
import { useTheme } from '../styles/ThemeProvider';
import NiceButton from '../components/NiceButton';
import { fetchData } from '../utils/fetchData';
import { useAppContext } from '../context/Context';
import { retrieveRecords, getCategories } from '../utils/databasen';

const HomeScreen = () => {
    const [data, setData] = useState([]);
    const { theme } = useTheme();
    const { filter, setFilter, search } = useAppContext();

    useEffect(() => {
        const doFetchData = async () => {
            const data = await retrieveRecords(filter, search);
            setData(data);
        };
        doFetchData();
    } , [filter, search]);

    // console.log('Filter: ',filter);
    // console.log('Search: ',search);
    
    return (
      <View style={theme.container}>
            <HeroBanner />
            <ToggleButtonLine buttons={['Starters', 'Mains', 'Desserts', 'Drinks']} />
            <View style={{flex: 1, height: '100%'}}>
                <FlatList
                    data={data}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (<MenuItem item={item}/>)}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={
                        () => <View style={{
                            marginTop: 10,
                            marginBottom: 10,
                            height: 1,
                            backgroundColor: theme.colors.primary1 }} />
                    } />
            </View>
        </View>
    );

};

export default HomeScreen;

