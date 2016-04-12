import React, { Component, PropTypes } from 'react';
import contacts from './constructor';
import { Link } from 'react-router';
import Icon from './icon';

export default class ListView extends Component {

	onContactSelect(contact) {
		return 	(
			<Link key={contact.mobile} to={`/contact_view/${contact.firstName}_${contact.lastName}`}>
					<li>
						<img src={contact.image} alt={`${contact.firstName} ${contact.lastName}`} />
						{`${contact.firstName} ${contact.lastName}`}
					</li>
			</Link>
		)
	}


	render() {
		return (
			<div className="list-view">
				<div className="contact-names">
					People I Actually Know
				</div>
				<ul className="peanut-butter">
					{contacts.map(::this.onContactSelect)}
				</ul>
				<Link to="/add_new">
					<div className="add-new">
						<Icon type="plus" />
						&nbsp;
						New Contact
					</div>
				</Link>
			</div>
		);
	}
}