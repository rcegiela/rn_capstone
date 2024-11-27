import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../styles/ThemeProvider';
import { Image } from 'react-native';
import { useFonts, MarkaziText_400Regular } from '@expo-google-fonts/markazi-text';

const HeroBanner = () => {
    const { theme } = useTheme();
    const [fontsLoaded] = useFonts({MarkaziText_400Regular,});
    
    return (
        <View style={theme.heroBox}>
            <Text style={theme.heroHeader}>Little Lemon</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '50%'}}>
                    <Text style={theme.heroSubHeader}>Chicago</Text>
                    <Text style={theme.heroText}>
                        We are family owned Mediteranean restaurant, focused on traditional recipes served with a modern twist.
                    </Text>
                </View>
                <View style={{width: '50%', aspectRatio: 1, paddingRight: 20, paddingBottom: 20}}> 
                    <Image
                        source={{ uri: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/bruschetta.jpg?raw=true' }}
                        style={theme.heroImage}
                    />
                </View>
            </View>
        </View>
    );
};

export default HeroBanner;
