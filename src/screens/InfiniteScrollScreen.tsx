import React, { useContext, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { FadeInImg } from '../components/FadeInImg';
import { ThemeContext } from '../context/theme/ThemeContext';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = ({ item }: { item: number }) => {
    const uri = `https://picsum.photos/id/${item}/1024/1024`;
    return (
      <FadeInImg
        uri={uri}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => renderItem({ item })}
        ListHeaderComponent={() => (
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <ActivityIndicator size={20} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItems: {
    backgroundColor: 'green',
    height: 150,
  },
});
