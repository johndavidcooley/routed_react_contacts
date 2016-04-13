import React, { Component, PropTypes } from 'react';
import Icon from './icon';

export default class Main extends Component {

	render() {
		return (
			<div className="main">
				<header>
					<div className="phone-top">
					<div className="camera" />
					&nbsp;
					<div className="listener" />
					</div>
				</header>
				<div>
					{this.props.children}
				</div>
				<footer>
					<div className="home-button" />
				</footer>
			</div>
		);
	}
}