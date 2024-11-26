import { React, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ToggleButton from './ToggleButton';
import NiceButton from './NiceButton';
import { useTheme } from '../styles/ThemeProvider';

const ToggleButtonLine = ({ buttons }) => {
    const { theme } = useTheme();

    const createObjectFromNames = (names) => names.reduce((acc, name) => ({ ...acc, [name]: null }), {});
      
    [buttonsState, setButtons] = useState(createObjectFromNames(buttons));

    const updateButton = (item, value) => setButtons(prevState => ({...prevState,[item]:value }));

    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                style={theme.toggleButtonLine}>
                
                <ToggleButton
                    text='All'
                    isOn={Object.values(buttonsState).every((value) => !value)}
                    onChange={(value)=>setButtons(createObjectFromNames(buttons))}
                    key='All'
                />

                {buttons.map((name, index) => (
                    <ToggleButton
                        text={name}
                        isOn={buttonsState[name]}
                        onChange={(value)=>updateButton(name,value)}
                        key={name}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default ToggleButtonLine;