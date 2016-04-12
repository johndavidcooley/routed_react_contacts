import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import { Link } from 'react-router';
import Icon from './icon';
import Dropzone from 'react-dropzone';
import contacts from './constructor';
import { hashHistory } from 'react-router';

export default class FormView extends Component {

	constructor(props) {
		super(props);

		this.state = {
			preview: '../images/drop-image.png'
		}
	}

	dropHandler([file]) {
		this.setState({preview: file.preview});
	}

	dataHandler(data) {
		contacts.push(data);
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
		hashHistory.push('/');
	}

	render() {
		return (
			<div className="form-view">
				<SSF onData={this.dataHandler}>
					<Link to="/">
						<div className="back-home">
							<Icon type="arrow-left" />
						</div>
					</Link>
					<h3>Add New Contact</h3>
					<div>
						<label>
							<input type="text" name="firstName" placeholder="  First Name"/>
						</label>
					</div>
					<div>
						<label>
							<input type="text" name="lastName" placeholder="  Last Name"/>
						</label>
					</div>
					<div>
						<label>
							<input type="email" name="email" placeholder="  Email"/>
						</label>
					</div>
					<div>
						<label>
							<input type="tel" name="mobile" placeholder="  Phone Number"/>
						</label>
					</div>
					<div>
						<label>
							<input type="text" name="band" placeholder="  Band"/>
						</label>
					</div>
					<div>
						<label>
							<input type="text" name="location" placeholder="  Location"/>
						</label>
					</div>
					<div className="drop">
						<Dropzone className="drop-zone" onDrop={::this.dropHandler}>
							<img src={this.state.preview} alt="Drop Your Image Here" />
						</Dropzone>
						<input type="hidden" name="image" value={this.state.preview}/>
					</div>
					<button className="form-btn">Submit</button>
				</SSF>
			</div>
		);
	}
}