import React, { useContext } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const { opacity, position, fadeIn, fadeOut, startMovingPosition } =
    useAnimation();

  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.box,
          backgroundColor: colors.primary,
          opacity,
          transform: [{ translateY: position }],
        }}
      />

      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100, 300);
        }}
        color={colors.primary}
      />
      <Button title="Fade Out" onPress={fadeOut} color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
