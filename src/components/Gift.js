import React, { Component } from 'react';

export default class Gift extends Component {
	state = { person: '', gift: '' };

	onRemoveGift = () => {
		this.props.removeGift(this.props.gift.id);
	};

	render() {
		return (
			<div>
				<form className="cls-form">
					<label>Name</label>
					<input
						type="text"
						className="inp-person"
						onChange={e => this.setState({ person: e.target.value })}></input>
					<label>Gift</label>
					<input
						type="text"
						className="inp-gift"
						onChange={e => this.setState({ gift: e.target.value })}></input>
				</form>
				<button className="btn-delete" onClick={this.onRemoveGift}>
					Remove Gift
				</button>
			</div>
		);
	}
}
