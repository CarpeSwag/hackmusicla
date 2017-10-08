import React from 'react';
import {
	AppRegistry,
	asset,
	Pano,
	Image,
	Text,
	View,
	DirectionalLight,
	AmbientLight,
	VrButton,
} from 'react-vr';

import Poem from './components/Poem';
import RotatingModel from './components/RotatingModel';

export default class repo2 extends React.Component {

	constructor(props) {
		super(props);
		var x = 0;
		var y = 0;
		var z = 0;
		this.state = {
			x: x, y: y, z: z,
			currMusic: 'nan',
			poetry: (<VrButton
				onClick={() => this.togglePoetry(true)}>
				<Image 
					source={asset("book.png")}
					style = {{
						position: 'absolute',
						width: 300,
						height: 300,
						transform: [
							{translate: [x, y, z]},
							{rotateY: -45},
							{translate: [115, 200, -350]}
						],
					}}/>
			</VrButton>)
		};
		
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.togglePoetry = this.togglePoetry.bind(this)
		this.changeMusic = this.changeMusic.bind(this)
	}
	
	handleKeyDown(e) {
		var ie = e.nativeEvent.inputEvent;
		if (ie.type === "KeyboardInputEvent" && 
			ie.keyCode >= 37 && ie.keyCode <= 40) {
			var x = this.state.x;
			var z = this.state.z;
			var MOVEMENT = 10;
			x += (ie.keyCode == 37)? MOVEMENT:0;
			z += (ie.keyCode == 38)? MOVEMENT:0;
			x -= (ie.keyCode == 39)? MOVEMENT:0;
			z -= (ie.keyCode == 40)? MOVEMENT:0;
			
			var THRESHOLD = 500;
			if (THRESHOLD - Math.sqrt(x*x + z*z) >= 0) {
				this.setState({
					x: x,
					z: z
				});
			}
		}
	}
	
	changeMusic(sound) {
		var music = (this.state.currMusic == sound[0])?
			'nan': sound[0];
		this.setState({
			currMusic: music
		});
	}
	
	togglePoetry(flag) {
		if (flag) {
		  this.setState({
			poetry: (
			<VrButton onClick={() => this.togglePoetry(false)}>
			  <Poem
				src='ghazal 1-Eng.png'
				width={600} height={500}
				x={-400} y={360} z={-300}
				xOff={this.state.x} yOff={this.state.y}
				zOff={this.state.z} />
			  <Poem
				src='ghazal 1.png'
				width={400} height={640}
				x={115} y={380} z={-350}
				xOff={this.state.x} yOff={this.state.y}
				zOff={this.state.z} />
			</VrButton>
			)
		  })  
		} else {
		  this.setState({
			poetry: (<VrButton
					onClick={() => this.togglePoetry(true)}>
					<Image 
						source={asset("book.png")}
						style = {{
							position: 'absolute',
							width: 300,
							height: 300,
							transform: [
								{translate: [this.state.x, this.state.y, this.state.z]},
								{rotateY: -45},
								{translate: [115, 200, -350]}
							],
						}}/>
				</VrButton>)
		  });
		}
	}

	render() {
		return (
			<View onInput={this.handleKeyDown} >
				<Pano source={[
						asset('img_left.jpg'),
						asset('img_right.jpg'),
						asset('img_top.jpg'),
						asset('img_bot.jpg'),
						asset('img_right_far.jpg'),
						asset('img_center.jpg'),
					]}
					style={{
						transform: [{
							translate: [this.state.x,
								this.state.y, this.state.z]
					}]}} />

        {this.state.poetry}

				<RotatingModel
					obj='gramophone.obj'
					mtl='gramophone.mtl'
					xonClickSound={['sounds/traditional_music.mp3']}
					currMusic={this.state.currMusic}
					clickCallback={this.changeMusic}
					x={0} y={-10} z={25} />

				<RotatingModel
					obj='setar.obj'
					mtl='setar.mtl'
					xonClickSound={['sounds/bgmusic.mp3']}
					currMusic={this.state.currMusic}
					clickCallback={this.changeMusic}
					x={25} y={-10} z={25} />
			
				<AmbientLight intensity={0.2}/>
				<DirectionalLight intensity={2}/>

			</View>
		);
	}
};

AppRegistry.registerComponent('repo2', () => repo2);
