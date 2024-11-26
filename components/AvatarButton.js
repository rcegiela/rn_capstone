import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../styles/ThemeProvider';
import Logo from './Logo';
import Avatar from './Avatar';

const AvatarButton = ({ size }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Avatar size={size} />
    </TouchableOpacity>
  );
};

export default AvatarButton;