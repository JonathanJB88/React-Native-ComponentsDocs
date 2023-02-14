import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const { opacity, position, fadeIn, fadeOut, startMovingPosition } =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.box,
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
      />
      <Button title="Fade Out" onPress={fadeOut} />
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
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
