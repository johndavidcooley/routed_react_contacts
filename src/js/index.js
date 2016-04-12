// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, hashHistory} from 'react-router'; 
import ContactView from './contact_view';
import ListView from './list_view';
import contacts from './constructor';
import FormView from './form_view';

render(
	<Router history={hashHistory}>
		<Route path="/" component={ListView}/>
		<Route path="/contact_view" component={ContactView}/>
		<Route path="/add_new" component={FormView}/>
	</Router>,
	document.querySelector('.app')
	)

// let addContactThenRender = (newContact) => {
// 	contacts.push(newContact);
// 	contacts.sort(
// 	function(a, b) {
// 		var lastNameA = a.lastName.toLowerCase();
// 		var lastNameB = b.lastName.toLowerCase();
// 		var firstNameA = a.firstName.toLowerCase();
// 		var firstNameB = b.firstName.toLowerCase();
// 		if (lastNameA < lastNameB) {
// 			return -1;
// 		} else if (lastNameA > lastNameB) {
// 			return 1;
// 		} else if (lastNameA === lastNameB) {
// 				if (firstNameA < firstNameB) {
// 					return -1;
// 				} else if (firstNameA > firstNameB) {
// 					return 1;
// 				} else {
// 					return 0;
// 				}
// 			}
// 		});
// 	// renderListView();
// 	hashHistory.push('/');
// }

// let editAndRenderListView = () => {

// 	contacts.sort(
// 	function(a, b) {
// 		var lastNameA = a.lastName.toLowerCase();
// 		var lastNameB = b.lastName.toLowerCase();
// 		var firstNameA = a.firstName.toLowerCase();
// 		var firstNameB = b.firstName.toLowerCase();
// 		if (lastNameA < lastNameB) {
// 			return -1;
// 		} else if (lastNameA > lastNameB) {
// 			return 1;
// 		} else if (lastNameA === lastNameB) {
// 				if (firstNameA < firstNameB) {
// 					return -1;
// 				} else if (firstNameA > firstNameB) {
// 					return 1;
// 				} else {
// 					return 0;
// 				}
// 			}
// 		});
// 	// renderListView();
// 	hashHistory.push('/');
// }


// render(
// 	<Router history={hashHistory}>
// 		<Route path="/" component={ListView}/>
// 		<Route path="/contact_view" component={ContactView}/>
// 		<Route path="/add_new" component={FormView}/>
// 		<Route path="/edit" component={EditView}/>
// 	</Router>
// 	)

// let renderContactView = (person) => {

// 	ReactDOM.render(
// 		// <ContactView contact={person} onBack={renderListView} onEdit={renderEditView} />,
// 		<ContactView contact={person} />,
// 		document.querySelector('.app')
// 		);

// }


// let renderListView = () => {
// 	ReactDOM.render(
// 		// <ListView arrayofContacts={contacts} onContact={renderContactView} onNewPerson={renderFormView} />,
// 		<ListView arrayofContacts={contacts} />,
// 		document.querySelector('.app')
// 		);
// }


// let renderFormView = () => {
// 	ReactDOM.render(
// 		// <FormView onAddNew={addContactThenRender} onReturnHome={renderListView} />,
// 		<FormView />,
// 		document.querySelector('.app')
// 		);
// }

// let renderEditView = (person) => {
// 	ReactDOM.render(
// 		// <EditView contact={person} onEditCancel={renderContactView} onEditSubmit={editAndRenderListView} />,
// 		<EditView contact={person} />,
// 		document.querySelector('.app')
// 		);
// }

// renderListView();