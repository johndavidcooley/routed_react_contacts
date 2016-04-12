import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Icon from './icon';
import Dropzone from 'react-dropzone';

export default class FormView extends Component {

	constructor(props) {
		super(props);

		this.state = {
			preview: '../images/drop-image.png'
		}
	}

	static propTypes = {
		onAddNew: PropTypes.func.isRequired,
		onReturnHome: PropTypes.func.isRequired
	}

	dropHandler([file]) {
		this.setState({preview: file.preview});
	}

	render() {
		let { onAddNew, onReturnHome } = this.props;
		return (
			<div className="form-view">
				<SSF onData={onAddNew}>
					<div className="back-home" onClick={onReturnHome}>
						<Icon type="arrow-left" />
					</div>
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