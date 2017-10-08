import React from 'react';
import {
	AppRegistry,
	asset,
	Model,
	VrButton,
	Animated,
} from 'react-vr';

const VrSoundEffects = require('VrSoundEffects');

export default class RotatingModel extends React.Component {

	load_music() {
		VrSoundEffects.load(asset(this.props.xonClickSound));
	}

	start_music() {
		VrSoundEffects.play(asset(this.props.xonClickSound));
	}

	stop_music() {
		//VrSoundEffects.unload(asset(this.props.xonClickSound));
	}

	render() {
		return (
			<VrButton
				onEnter={() => this.load_music()}
				onClick={() => this.start_music()}
				onLongClick={() => this.stop_music()}>
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
			</VrButton>
		);
	}
};

AppRegistry.registerComponent('RotatingModel', () => RotatingModel);
