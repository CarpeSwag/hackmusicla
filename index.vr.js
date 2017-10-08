import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Image,
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
        <Image 
          source={asset('ghazal 1.png')}
          style={{
            position: 'absolute',
            width: 800,
            height: 1280,
            transform: [
              {rotateY: -45},
              {translate: [-100, 655, 0]},
              {scale: 0.25}
            ],
          }}/>
          <Image 
          source={asset('ghazal 1-Eng.png')}
          style={{
            position: 'absolute',
            width: 600,
            height: 500,
            transform: [
              {rotateY: -45},
              {translate: [-300, 275, -50]},
              {scale: 0.5}
            ],
          }}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('repo2', () => repo2);
