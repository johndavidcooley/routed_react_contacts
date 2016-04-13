import React, { Component, PropTypes } from 'react';
import { Link, hashHistory } from 'react-router';
import Icon from './icon';
import contacts from './constructor';

export default class ContactView extends Component {


clickHandler(contact) {
	let makingSure = confirm('Are you sure?');
	if (makingSure === true) {
		contacts.splice(contacts.indexOf({contact}, 1));
		hashHistory.push("/");
	};
}

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
					<li className="edit-remove">
						<Link to="/edit">
							<div className="edit-remove-edit">
								Edit
							</div>
						</Link>
						<div onClick={this.clickHandler} className="edit-remove-remove">
							Remove
						</div>
					</li>
				</ul>
			</div>
		);
	}
}