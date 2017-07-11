import React, { Component } from 'react';

class Timer extends Component {

	str_pad_left(str, pad, len) {
		/* https://stackoverflow.com/a/3733257 */
		return (new Array(len + 1).join(pad) + str).slice(-len);
	}

	formatSeconds(secs) {
		/* https://stackoverflow.com/a/37096512 */
		secs = Number(secs);
		var h = ~~(secs / 3600);
		var m = ~~(secs % 3600 / 60);
		var s = ~~(secs % 3600 % 60);

		return this.str_pad_left(h, '0', 2) + ':' + this.str_pad_left(m, '0', 2) + ':' + this.str_pad_left(s, '0', 2);
	}

	render() {
		return (
			<div className="timer">
				<h1>{this.formatSeconds(this.props.timeInSecs)}</h1>
			</div>
		);
	}
}

export default Timer;
