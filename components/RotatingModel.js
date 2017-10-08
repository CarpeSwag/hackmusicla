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
		this.state = {
			rotation: 0,
			yOff: 0,
			yDir: 1,
		};
		
		this.animate = this.animate.bind(this)
		window.requestAnimationFrame(this.animate);
	}
	
	animate() {
		var newRotate = this.state.rotation + 1;
		if (newRotate >= 360) {
			newRotate = 0;
		}
		var dir = this.state.yDir;
		var yOffset = this.state.yOff + dir * 0.01;
		if (yOffset >= 0.5 || yOffset <= -0.5) {
			dir *= -1;
		}
		
		this.setState({
			rotation: newRotate,
			yOff: yOffset,
			yDir: dir,
		});
		window.requestAnimationFrame(this.animate);
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
								this.props.y + this.state.yOff,
								this.props.z
							]},
							{rotateY: this.state.rotation}
						],
					}}
					lit={true} />
				
				{this.renderSounds()}
				
			</VrButton>
		);
	}
};

AppRegistry.registerComponent('RotatingModel', () => RotatingModel);
