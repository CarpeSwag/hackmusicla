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
				
				<Sound source={asset(this.props.xonClickSound)}
					playControl={
						((this.props.currMusic
							=== this.props.xonClickSound)?
							'play': 'stop')
					} />
			</VrButton>
		);
	}
};

AppRegistry.registerComponent('RotatingModel', () => RotatingModel);
