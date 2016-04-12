import React, { Component, PropTypes } from 'react';
import contacts from './constructor';
import { Link } from 'react-router';
import Icon from './icon';

export default class ListView extends Component {

	// static propTypes = {
	// 	arrayofContacts: PropTypes.array.isRequired,
	// 	onContact: PropTypes.func.isRequired,
	// 	onNewPerson: PropTypes.func.isRequired
	// }



	onContactSelect(contact) {
		// let { onContact } = this.props;
		return 	<Link to="/contact_view">
					<li key={`${contact.firstName} ${contact.lastName}`}>
						<img src={contact.image} alt={`${contact.firstName} ${contact.lastName}`} />
						{`${contact.firstName} ${contact.lastName}`}
					</li>
				</Link>
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