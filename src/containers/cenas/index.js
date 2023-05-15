import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TYText } from 'tuya-panel-kit';
import ControllerBar from './bottom/ControllBar';

// import Lamp from '../lamp';

const cenaScene = () => (
  <View style={styles.container}>
    < TYText>
        incluir as cenas 
    </TYText>
    <ControllerBar />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#000",
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default cenaScene;
