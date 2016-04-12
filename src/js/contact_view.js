import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Icon from './icon';
import contacts from './constructor';

export default class ContactView extends Component {


	render() {
		let { contact_name } = this.props.params;
		let contact = contacts.find(currentUser => `${currentUser.firstName}_${currentUser.lastName}` === contact_name)
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
			</div>
		);
	}
}