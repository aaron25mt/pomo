import React, { Component } from 'react';

class Option extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default Option;
