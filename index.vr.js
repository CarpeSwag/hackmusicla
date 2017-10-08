import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class repo2 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={[
          asset('img_left.jpg'),
          asset('img_right.jpg'),
          asset('img_top.jpg'),
          asset('img_bot.jpg'),
          asset('img_right_far.jpg'),
          asset('img_center.jpg'),
        ]} />
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('repo2', () => repo2);
