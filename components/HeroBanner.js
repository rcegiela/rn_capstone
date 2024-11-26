import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../styles/ThemeProvider';
import { Image } from 'react-native';
import { useFonts, MarkaziText_400Regular } from '@expo-google-fonts/markazi-text';

const HeroBanner = () => {
    const { theme } = useTheme();
    const [fontsLoaded] = useFonts({MarkaziText_400Regular,});
    
    return (
        <View style={{backgroundColor: theme.colors.primary1, paddingLeft: 20}}>
            <Text style={{
                fontSize: 64,
                fontFamily: 'MarkaziText-Regular',
                color: theme.colors.primary2,
                marginBottom: 0}
                }>
                Little Lemon</Text>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: theme.colors.primary1}}>
                <View style={{width: '50%'}}>
                    <Text style={{
                        fontSize: 32,
                        marginTop: 0,
                        lineHeight: 32,
                        fontFamily: 'MarkaziText-Regular',
                        color: theme.colors.secondary3}
                        }>
                            Chicago</Text>
                    <Text style={{color: theme.colors.secondary3}}>
                        We are family owned Mediteranean restaurant, focused on traditional recipes served with a modern twist.
                    </Text>
                </View>
                <View style={{width: '50%', aspectRatio: 1, paddingRight: 20, paddingBottom: 20}}> 
                    <Image
                        source={{ uri: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/bruschetta.jpg?raw=true' }}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 16,
                            marginRight: 10,
                            resizeMode: 'cover'
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default HeroBanner;
