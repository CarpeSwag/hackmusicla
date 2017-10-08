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
			yOsc: 0,
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
		var yOffset = this.state.yOsc + dir * 0.01;
		if (yOffset >= 0.5 || yOffset <= -0.5) {
			dir *= -1;
		}
		
		this.setState({
			rotation: newRotate,
			yOsc: yOffset,
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
						{translate: [
								this.props.xOff / 10,
								this.props.yOff / 10,
								this.props.zOff / 10
							]},
							{rotateY: -45},
							{translate: [
								this.props.x,
								this.props.y + this.state.yOsc,
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
