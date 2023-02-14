import React, { useState } from 'react';
import { View, Button, Modal, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button title="Open Modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="fade" visible={isVisible} transparent>
        {/* Background */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          {/* Modal Content*/}
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Modal
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '300',
                marginBottom: 25,
              }}>
              Modal Body
            </Text>
            <Button title="Close Modal" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
