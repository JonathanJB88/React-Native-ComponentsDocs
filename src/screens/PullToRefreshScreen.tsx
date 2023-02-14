import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();

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
      style={{ marginTop: refreshing ? top : 0 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
          style={{ backgroundColor: 'white' }}
          tintColor="#5856D6"
          title="Refreshing"
          titleColor="#5856D6"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
        <HeaderTitle title={data} />
      </View>
    </ScrollView>
  );
};
