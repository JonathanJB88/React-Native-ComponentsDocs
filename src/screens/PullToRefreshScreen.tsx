import React, { useContext, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';

export const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();

  const {
    theme: { colors, dividerColor, dark },
  } = useContext(ThemeContext);

  const [refreshing, setRefreshing] = useState(false);

  const [data, setData] = useState<string>('');

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      setData('Hello World');
    }, 1500);
  };

  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={colors.background}
          colors={[dividerColor]}
          style={{ backgroundColor: 'white' }}
          tintColor={colors.background}
          title="Refreshing"
          titleColor={dark ? 'white' : 'black'}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
        <HeaderTitle title={data} />
      </View>
    </ScrollView>
  );
};
