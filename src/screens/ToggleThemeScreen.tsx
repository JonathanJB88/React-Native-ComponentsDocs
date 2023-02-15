import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ToggleThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: { colors, dark },
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Toggle Theme" />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.8}
          style={{
            width: 150,
            height: 50,
            borderRadius: 10,
            backgroundColor: colors.primary,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: dark ? 'black' : 'white',
              textAlign: 'center',
              fontSize: 20,
            }}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{
            width: 150,
            height: 50,
            borderRadius: 10,
            backgroundColor: colors.primary,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: dark ? 'black' : 'white',
              textAlign: 'center',
              fontSize: 20,
            }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
