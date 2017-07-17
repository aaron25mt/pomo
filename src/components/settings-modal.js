import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class SettingsModal extends Component {
	render() {
		return (
			<Modal show={this.props.show} onHide={this.props.close}>
				<Modal.Header closeButton>
					<Modal.Title>Settings</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.props.children}
				</Modal.Body>
				<Modal.Footer>
					<Button className="btn btn-default" onClick={this.props.close}>Close</Button>
					<Button className="btn btn-primary">Save</Button>
				</Modal.Footer>
			</Modal>
		);
		// return (
		// 	<div className="modal fade" tabindex="-1" role="dialog">
		// 		<div className="modal-dialog" role="document">
		// 			<div className="modal-content">
		// 				<div className="modal-header">
		// 					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		// 					<h4 className="modal-title">Settings</h4>
		// 				</div>
		// 				<div className="modal-body">

		// 				</div>
		// 				<div className="modal-footer">
		// 					<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		// 					<button type="button" className="btn btn-primary">Save</button>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// );
	}
}

export default SettingsModal;
