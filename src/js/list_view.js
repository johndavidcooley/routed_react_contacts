import React, { Component, PropTypes } from 'react';
import contacts from './constructor';
import Icon from './icon';

export default class ListView extends Component {

	static propTypes = {
		arrayofContacts: PropTypes.array.isRequired,
		onContact: PropTypes.func.isRequired,
		onNewPerson: PropTypes.func.isRequired
	}



	onContactSelect(contact) {
		let { onContact } = this.props;
		return <li onClick={onContact.bind(null, contact)} key={`${contact.firstName} ${contact.lastName}`}>
					<img src={contact.image} alt={`${contact.firstName} ${contact.lastName}`} />
					{`${contact.firstName} ${contact.lastName}`}
				</li>
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
				<div className="add-new" onClick={this.props.onNewPerson}>
					<Icon type="plus" />
					&nbsp;
					New Contact
				</div>
			</div>
		);
	}
}