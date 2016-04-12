import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Icon from './icon';
import contacts from './constructor';
// import CONTACT_SHAPE from './contact_shape';

export default class ContactView extends Component {
	// static propTypes = {
	// 	contact: PropTypes.shape ({
	// 		firstName: PropTypes.string.isRequired,
	// 		lastName: PropTypes.string.isRequired,
	// 		email: PropTypes.string.isRequired,
	// 		mobile: PropTypes.string.isRequired,
	// 		location: PropTypes.string.isRequired,
	// 		image: PropTypes.string.isRequired
	// 	}).isRequired,
	// 	onBack: PropTypes.func.isRequired,
	// 	onEdit: PropTypes.func.isRequired
	// }

	render() {
		let { contact } = this.props;
		return (
			<div className="contact-view">
				<div className = "avatar">
					<Link to="/">
						<button>
							<Icon type="arrow-left"/>
						</button>
					</Link>
					<img src={contacts[0].image} alt={`${contacts[0].firstName} ${contacts[0].lastName}`} />
				</div>
				<ul>
					<li>
						<Icon type="user" />
						{`${contacts[0].firstName} ${contacts[0].lastName}`}
					</li>
					<li>
						<Icon type="envelope" />
						{contacts[0].email}
					</li>
					<li>
						<Icon type="mobile" />
						{contacts[0].mobile}
					</li>
					<li>
						<Icon type="music" />
						{contacts[0].band}
					</li>
					<li>
						<Icon type="globe" />
						{contacts[0].location}
					</li>
				</ul>
				<button className="edit-button">
					Edit user
				</button>
			</div>
		);
	}
}