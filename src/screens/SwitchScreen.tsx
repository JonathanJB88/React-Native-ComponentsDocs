import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const { isActive, isHappy, isHungry } = state;

  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{ ...styles.container }}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>
          Is Active
        </Text>

        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>
          Is Hungry
        </Text>

        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>
          Is Happy
        </Text>

        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={{ ...styles.switchText, color: colors.text }}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  switchText: {
    fontSize: 25,
    color: 'black',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
