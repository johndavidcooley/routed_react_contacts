// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router'; 
import ContactView from './contact_view';
import ListView from './list_view';
import contacts from './constructor';
import FormView from './form_view';
import EditView from './edit_view';
import Main from './main';

render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={ListView}/>
			<Route path="/contact_view/:contact_name" component={ContactView}/>
			<Route path="/add_new" component={FormView}/>
			<Route path="/edit" component={EditView}/>
		</Route>
	</Router>,
	document.querySelector('.app')
	)