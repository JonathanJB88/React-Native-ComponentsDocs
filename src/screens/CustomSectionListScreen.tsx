import React from 'react';
import { SectionList, View, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';

interface Houses {
  house: string;
  data: string[];
}

const houses: Houses[] = [
  {
    house: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    house: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Scarlet Whitch',
      'Dr. Strange',
      'Antman',
      'Thor',
      'Spiderman',
      'Scarlet Whitch',
      'Dr. Strange',
      'Dr. Strange',
      'Antman',
      'Thor',
      'Spiderman',
      'Scarlet Whitch',
      'Dr. Strange',
    ],
  },
  {
    house: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const CustomSectionListScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      <SectionList
        sections={houses}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={{ marginBottom: 65 }}>
            <HeaderTitle title={`Total of Houses: ${houses.length}`} />
          </View>
        )}
        renderItem={({ item }) => (
          <Text style={{ color: 'black' }}>{item}</Text>
        )}
        renderSectionHeader={({ section: { house } }) => (
          <View style={{ backgroundColor: 'white' }}>
            <HeaderTitle title={house} />
          </View>
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={`Total: ${section.data.length}`} />
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
