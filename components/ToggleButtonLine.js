import { React, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import ToggleButton from './ToggleButton';
import NiceButton from './NiceButton';
import { useTheme } from '../styles/ThemeProvider';
import { useAppContext } from '../context/Context';

const ToggleButtonLine = ({ buttons }) => {
    const { theme } = useTheme();
    const { filter, setFilter } = useAppContext();

    const createObjectFromNames = (names) => names.reduce((acc, name) => ({ ...acc, [name]: null }), {});
    const activeButtons = (buttons) => Object.keys(buttons).filter(key => buttons[key]);
    const updateButton = (item, value) => setButtons(prevState => ({...prevState,[item]:value }));

    const [buttonsState, setButtons] = useState(createObjectFromNames(buttons));

    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                style={theme.toggleButtonLine}>
                
                <ToggleButton
                    text='All'
                    isOn={Object.values(buttonsState).every((value) => !value)}
                    onChange={(value)=>{
                        setButtons(createObjectFromNames(buttons));
                        setFilter([]);
                    }}
                    key='All'
                />

                {buttons.map((name, index) => (
                    <ToggleButton
                        text={name}
                        isOn={buttonsState[name]}
                        onChange={(value)=>{
                            updateButton(name,value);
                            setFilter(activeButtons({...buttonsState, [name]: value}));
                        }}
                        key={name}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default ToggleButtonLine;