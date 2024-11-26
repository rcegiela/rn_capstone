import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTheme } from '../styles/ThemeProvider';
import Checkbox from 'expo-checkbox';

const MenuItem = ({ item }) => {
    const { theme } = useTheme();
  
    // const pictureUri = `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true`;

    return (
        <View>
            <Text style={theme.menuItemName}>{item.title}</Text>
            <View style={{flexDirection: 'row'}}>    
                <View style={{flexDirection: 'column', width: '70%'}}>
                    <Text style={theme.menuItemDescription}>{item.description.substring(0, 60) + '...'}</Text>
                    <Text style={theme.menuItemPrice}>{'$'+item.price}</Text>
                </View>
                <View style={{ width: 100, height: 100 }}>
                    <Image
                        source={{uri: item.image}}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
            </View>
        </View>
    )
  };
  
  export default MenuItem;
  // 