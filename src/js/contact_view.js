import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Icon from './icon';
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
		// let { contact, onBack, onEdit } = this.props;
		return (
			<div className="contact-view">
				<div className = "avatar">
					<Link to="/">
						<button>
							<Icon type="arrow-left"/>
						</button>
					</Link>
					<img src={contact.image} alt={`${contact.firstName} ${contact.lastName}`} />
				</div>
				<ul>
					<li>
						<Icon type="user" />
						{`${contact.firstName} ${contact.lastName}`}
					</li>
					<li>
						<Icon type="envelope" />
						{contact.email}
					</li>
					<li>
						<Icon type="mobile" />
						{contact.mobile}
					</li>
					<li>
						<Icon type="music" />
						{contact.band}
					</li>
					<li>
						<Icon type="globe" />
						{contact.location}
					</li>
				</ul>
				<Link to="/edit">
					<button className="edit-button">
						Edit user
					</button>
				</Link>
			</div>
		);
	}
}