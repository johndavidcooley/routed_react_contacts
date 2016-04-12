import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Icon from './icon';
import Dropzone from 'react-dropzone';
import ContactView from './contact_view';
import Contact from './constructor';

export default class EditView extends Component {

	constructor(props) {
		super(props);

		this.state = {
			preview: '../images/drop-image.png'
		}
	}

	static propTypes = {

		onEditCancel: PropTypes.func.isRequired,
		onEditSubmit: PropTypes.func.isRequired
	}

	dropHandler([file]) {
		this.setState({preview: file.preview});
	}

	render() {
		let { onEditCancel, onEditSubmit, contact } = this.props;
		return (
			<div className="form-view">
				<SSF onData={onEditSubmit}>
					<div className="back-home" onClick={onEditCancel}>
						<Icon type="arrow-left" />
					</div>
					<h3>Edit Contact</h3>
					<div>
						<label>
							<input type="text" name="firstName">{contact.firstName}</input>
						</label>
					</div>
					<div>
						<label>
							<input type="text" name="lastName" value={contact.lastName} />
						</label>
					</div>
					<div>
						<label>
							<input type="email" name="email" value={contact.email} />
						</label>
					</div>
					<div>
						<label>
							<input type="tel" name="mobile" value={contact.mobile} />
						</label>
					</div>
					<div>
						<label>
							<input type="text" name="band" value={contact.band} />
						</label>
					</div>
					<div>
						<label>
							<input type="text" name="location" value={contact.location} />
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