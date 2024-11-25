import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAppContext } from '../context/Context';
import { useTheme } from '../styles/ThemeProvider';
import CaptionedTextInput from '../components/CaptionedTextInput';
import NiceButton from '../components/NiceButton';
import CheckboxWithText from '../components/CheckboxWithText';
import { validateEmail, validatePhoneNumber, validateName, validateProfile } from '../utils/validators'

const ProfileScreen = () => {
    const { state, updateValue, setState, loadState, saveState, resetState } = useAppContext();
    const { theme } = useTheme();

    return (
        <View style={theme.container}>
            <Text style={theme.headerText}>Personal profile</Text>

            <Text style={theme.caption}>Avatar</Text>            
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>

                <View style={theme.avatar}>
                    <Image
                        source={require('../assets/Avatar.webp')}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>

                <NiceButton
                    text="Change"
                    onPress={() => alert('Change Photo')}
                    style={{...theme.niceGreenButton, marginRight: 20}}
                />
                
                <NiceButton
                    text="Remove"
                    onPress={() => alert('Remove Photo')}
                    style={theme.niceWhiteButton}
                />
            </View>

            <CaptionedTextInput
                caption="First Name:"
                placeholder="First Name"
                value={state.firstName || ''}
                onChangeText={(text) => updateValue('firstName', text)}
                isValid={validateName(state.firstName)}
                />

            <CaptionedTextInput
                caption="Last Name:"
                placeholder="Last Name"
                value={state.lastName || ''}
                onChangeText={(text) => updateValue('lastName', text)}
                isValid={validateName(state.lastName)}
                />
            
            <CaptionedTextInput
                caption="Email:"
                placeholder="Email"
                keyboardType="email-address"
                value={state.email || ''}
                onChangeText={(text) => updateValue('email', text)}
                isValid={validateEmail(state.email)}
                />
            
            <CaptionedTextInput
                caption="Phone Number:"
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={state.phone || ''}
                onChangeText={(text) => updateValue('phone', text)}
                isValid={validatePhoneNumber(state.phone)}
                />
            
            
            <Text style={theme.headerText}>Email Notifications</Text>
            
            <CheckboxWithText
                text={"Order statuses"}
                value={state.orderStatuses || false}
                onValueChange={(value) => {updateValue('orderStatuses', value)}}
            />

            <CheckboxWithText
                text={"Password changes"}
                value={state.passwordChanges || false}
                onValueChange={(value) => {updateValue('PasswordChanges', value)}}
            />

            <CheckboxWithText
                text={"Special offers"}
                value={state.specialOffers || false}
                onValueChange={(value) => {updateValue('specialOffers', value)}}
            />

            <CheckboxWithText
                text={"Newsletter"}
                value={state.newsletter || false}
                onValueChange={(value) => {updateValue('newsletter', value)}}
            />

            <NiceButton
                text="Log out"
                onPress={resetState}
            />
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5 }}>
                <NiceButton
                    text="Discard Changes"
                    onPress={loadState}
                    style={theme.niceWhiteButton}
                />

                <NiceButton
                    text={"Save Changes"}
                    onPress={saveState}
                    style={theme.niceGreenButton}
                    disabled={!validateProfile(state)}
                />
            </View>
        </View>
    );
};

export default ProfileScreen;