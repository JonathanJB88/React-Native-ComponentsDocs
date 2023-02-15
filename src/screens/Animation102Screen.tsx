import React, { useContext, useRef } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          pan.getLayout(),
          { ...styles.box, backgroundColor: colors.primary },
        ]}
      />
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
    borderRadius: 4,
  },
});
