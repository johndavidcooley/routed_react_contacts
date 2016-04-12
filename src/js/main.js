import React, { Component, PropTypes } from 'react';

export default class Main extends Component {

	render() {
		return (
			<div className="main">
				<header>
					This is a static header.
				</header>
				<div>
					{this.props.children}
				</div>
				<footer>
					This is a static footer.
				</footer>
			</div>
		);
	}
}