import React, { useContext } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MenuItem } from '../interfaces/appInterfaces';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({
  menuItem: { name, icon, component },
}: Props) => {
  const { dispatch } = useNavigation();
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => dispatch(CommonActions.navigate(component))}>
      <View style={styles.container}>
        <Icon name={icon} size={23} color={colors.primary} />
        <Text style={{ ...styles.itemText, color: colors.text }}>{name}</Text>
        <View style={{ flex: 1 }} />
        <Icon name="chevron-forward-outline" size={23} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 19,
  },
});
