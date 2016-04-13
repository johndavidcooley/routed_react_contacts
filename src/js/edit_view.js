import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Icon from './icon';
import Dropzone from 'react-dropzone';
import { Link, hashHistory } from 'react-router';
import ContactView from './contact_view';
import contacts from './constructor';

export default class EditView extends Component {

	constructor(props) {
		super(props);

		this.state = {
			preview: '../images/drop-image.png'
		}
	}

	dropHandler([file]) {
		this.setState({preview: file.preview});
	}

	dataHandler() {
		hashHistory.push("/");
	}

	render() {
		return (
			<div className="form-view">
				<SSF onData={this.dataHandler}>
					<Link to='/contact_view/${contacts[0].firstname'>
						<div className="back-home">
							<Icon type="arrow-left" />
						</div>
					</Link>
					<h3>Edit Contact</h3>
					<div>
						<label>
							<input type="text" name="firstName" value={contacts[0].firstName}></input>
						</label>
					</div>
					<div>
						<label>
							<input type="text" name="lastName" value={contacts[0].lastName} />
						</label>
					</div>
					<div>
						<label>
							<input type="email" name="email" value={contacts[0].email} />
						</label>
					</div>
					<div>
						<label>
							<input type="tel" name="mobile" value={contacts[0].mobile} />
						</label>
					</div>
					<div>
						<label>
							<input type="text" name="band" value={contacts[0].band} />
						</label>
					</div>
					<div>
						<label>
							<input type="text" name="location" value={contacts[0].location} />
						</label>
					</div>
					<div className="drop">
						<Dropzone className="drop-zone" onDrop={::this.dropHandler}>
							<img src={this.state.preview} alt="Edit Your Image Here" />
						</Dropzone>
						<input type="hidden" name="image" value={this.state.preview}/>
					</div>
					<button className="edit-btn">Submit</button>
				</SSF>
			</div>
		);
	}
}