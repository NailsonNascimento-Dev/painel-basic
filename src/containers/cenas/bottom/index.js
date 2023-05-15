import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Utils, TYText } from 'tuya-panel-kit';
import ControllerBar from './ControllBar';
import WhiteSlider from './WhiteSlider';
import ColourSlider from './ColourSlider';
import Scenes from './Scenes';
import SceneSlider from './SceneSlider';
import SceneColors from './SceneColors';

const { convertX: cx } = Utils.RatioUtils;

const HomeBottomView = () => (
  <View style={[styles.container]}>

    <WhiteSlider />

    <ControllerBar />
    {/* <WhiteSlider />
    <ColourSlider />
    <Scenes />
    <SceneSlider />
    <SceneColors /> */}
  </View>
);
const styles = StyleSheet.create({
  container: {
    // alignSelf: 'stretch',
    // height: cx(300),
  },

});

export default HomeBottomView;
