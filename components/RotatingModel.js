import React from 'react';
import {
	AppRegistry,
	asset,
	Model,
	VrButton,
} from 'react-vr';

const VrSoundEffects = require('VrSoundEffects');

export default class RotatingModel extends React.Component {
	
	// constructor(props) {
	// 	super(props);
	// 	VrSoundEffects.load(asset(this.props.onClickSound));
	// }

	// play_sound() {
	// 	console.log('Playing some sound');
	// 	VrSoundEffects.play(asset(this.props.onClickSound));
	// }

	stop_sound() {
		VrSoundEffects.unload(asset(this.props.onClickSound));
	}

	render() {
		return (
			<VrButton
				//onClick={() => this._play_sound()}
				onClickSound={asset(this.props.onClickSound)}>
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
					}} />
			</VrButton>
		);
	}
};

AppRegistry.registerComponent('RotatingModel', () => RotatingModel);
