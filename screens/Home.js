import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import MenuItem from '../components/MenuItem';
import ToggleButtonLine from '../components/ToggleButtonLine';
import HeroBanner from '../components/HeroBanner';
import { useTheme } from '../styles/ThemeProvider';
import NiceButton from '../components/NiceButton';
import { fetchData } from '../utils/fetchData';

const HomeScreen = () => {
    const [data, setData] = useState([]);
    const { theme } = useTheme();

    useEffect(() => {
        const doFetchData = async () => {
            console.log('Fetching menu (HomeScreen)...');
            const data = await fetchData();
            setData(data['menu']);
        };
        doFetchData();
    } , []);
    
    return (
      <View style={theme.container}>
            <HeroBanner />
            <ToggleButtonLine buttons={['Appetizers', 'Entrees', 'Mains', 'Desserts', 'Drinks']} />
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

