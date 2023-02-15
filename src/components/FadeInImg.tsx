import React, { useContext, useState } from 'react';
import { ImageStyle, StyleProp } from 'react-native';
import { ActivityIndicator, Animated, View } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImg = ({ uri, style }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn(350);
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          color={colors.primary}
          size={30}
        />
      )}
      <Animated.Image
        source={{ uri }}
        onLoadEnd={finishLoading}
        style={{
          ...(style as any),
          // width: '100%',
          // height: 400,
          opacity,
        }}
      />
    </View>
  );
};
