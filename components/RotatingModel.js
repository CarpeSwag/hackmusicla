import React from 'react';
import {
	AppRegistry,
	asset,
	Model,
	VrButton,
	Animated,
	Sound
} from 'react-vr';

const VrSoundEffects = require('VrSoundEffects');

export default class RotatingModel extends React.Component {
	constructor(props) {
		super(props);
	}
	
	renderSounds() {
		var paths = this.props.xonClickSound;
		var sounds = [];
		for (var i = 0; i < paths.length; ++i) {
			var sound = (
				<Sound key={i}
					source={asset(paths[i])}
					playControl={
						((this.props.currMusic === paths[i])?
							'play': 'stop')
					} />
			);
			sounds.push(sound);
		}
		return sounds;
	}
	
	render() {
		return (
			<VrButton
				onClick={() => this.props.clickCallback(
					this.props.xonClickSound)}>
				<Model
					source={{
						obj: asset(this.props.obj),
						mtl: asset(this.props.mtl),
					}}
					style={{
						position: 'absolute',
						transform: [
							{rotateY: -45},
							{translate: [
								this.props.x,
								this.props.y,
								this.props.z
							]}
						],
					}}
					lit={true} />
				
				{this.renderSounds()}
				
			</VrButton>
		);
	}
};

AppRegistry.registerComponent('RotatingModel', () => RotatingModel);
