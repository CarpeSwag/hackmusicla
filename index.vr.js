import React from 'react';
import {
	AppRegistry,
	asset,
	Pano,
	Image,
	Text,
	View,
  DirectionalLight,
  AmbientLight
} from 'react-vr';

import Poem from './components/Poem';
import RotatingModel from './components/RotatingModel';

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
				
        <Poem
					src='ghazal 1-Eng.png'
					width={300} height={250}
					x={-200} y={160} z={-200} />
				
        <Poem
					src='ghazal 1.png'
					width={200} height={320}
					x={115} y={182} z={-250} />
        
        <RotatingModel
          obj='gramophone.obj'
          mtl='gramophone.mtl'
          xonClickSound='sounds/traditional_music.mp3'
          x={0} y={-10} z={25} />

        <RotatingModel
          obj='setar.obj'
          mtl='setar.mtl'
          xonClickSound='sounds/bgmusic.mp3'
          x={25} y={-10} z={25} />
			
        <AmbientLight intensity={0.2}/>
        <DirectionalLight intensity={2}/>

      </View>
		);
	}
};

AppRegistry.registerComponent('repo2', () => repo2);
