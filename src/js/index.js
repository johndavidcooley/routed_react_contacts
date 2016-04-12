// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import ContactView from './contact_view';
import ListView from './list_view';
import contacts from './constructor';
import FormView from './form_view';
import EditView from './edit_view';


let addContactThenRender = (newContact) => {
	contacts.push(newContact);
	contacts.sort(
	function(a, b) {
		var lastNameA = a.lastName.toLowerCase();
		var lastNameB = b.lastName.toLowerCase();
		var firstNameA = a.firstName.toLowerCase();
		var firstNameB = b.firstName.toLowerCase();
		if (lastNameA < lastNameB) {
			return -1;
		} else if (lastNameA > lastNameB) {
			return 1;
		} else if (lastNameA === lastNameB) {
				if (firstNameA < firstNameB) {
					return -1;
				} else if (firstNameA > firstNameB) {
					return 1;
				} else {
					return 0;
				}
			}
		});
	renderListView();
}

let editAndRenderListView = () => {

	contacts.sort(
	function(a, b) {
		var lastNameA = a.lastName.toLowerCase();
		var lastNameB = b.lastName.toLowerCase();
		var firstNameA = a.firstName.toLowerCase();
		var firstNameB = b.firstName.toLowerCase();
		if (lastNameA < lastNameB) {
			return -1;
		} else if (lastNameA > lastNameB) {
			return 1;
		} else if (lastNameA === lastNameB) {
				if (firstNameA < firstNameB) {
					return -1;
				} else if (firstNameA > firstNameB) {
					return 1;
				} else {
					return 0;
				}
			}
		});
	renderListView();
}


let renderContactView = (person) => {

	ReactDOM.render(
		<ContactView contact={person} onBack={renderListView} onEdit={renderEditView} />,
		document.querySelector('.app')
		);

}


let renderListView = () => {
	ReactDOM.render(
		<ListView arrayofContacts={contacts} onContact={renderContactView} onNewPerson={renderFormView} />,
		document.querySelector('.app')
		);
}


let renderFormView = () => {
	ReactDOM.render(
		<FormView onAddNew={addContactThenRender} onReturnHome={renderListView} />,
		document.querySelector('.app')
		);
}

let renderEditView = (person) => {
	ReactDOM.render(
		<EditView contact={person} onEditCancel={renderContactView} onEditSubmit={editAndRenderListView} />,
		document.querySelector('.app')
		);
}

renderListView();