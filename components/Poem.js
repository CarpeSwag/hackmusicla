import React from 'react';
import {
	AppRegistry,
	asset,
	Pano,
	Image,
	Text,
	View,
} from 'react-vr';

export default class Poem extends React.Component {
	render() {
		return (
			<Image
				source={asset(this.props.src)}
				style={{
					position: 'absolute',
					width: this.props.width,
					height: this.props.height,
					transform: [
						{translate: [
							this.props.xOff,
							this.props.yOff,
							this.props.zOff
						]},
						{rotateY: -45},
						{translate: [
							this.props.x,
							this.props.y,
							this.props.z
						]}
					],
				}}/>
		);
	}
};

AppRegistry.registerComponent('Poem', () => Poem);
