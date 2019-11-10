import React, { Component } from 'react';
import Gift from './Gift';

export default class App extends Component {
	state = { gifts: [] };

	getNewId = numbers => {
		if (!numbers || !numbers.length) return 1;
		return Math.max(...numbers) + 1;
	};

	onAddGift = () => {
		const { gifts } = this.state;

		const id = this.getNewId(gifts.map(gift => gift.id));

		this.setState({ gifts: [...gifts, { id }] });
	};

	removeGift = id => {
		const gifts = this.state.gifts.filter(gift => gift.id !== id);

		this.setState({ gifts });
	};

	renderGifts = () =>
		this.state.gifts.map(gift => (
			<Gift key={gift.id} gift={gift} removeGift={this.removeGift}></Gift>
		));

	render() {
		return (
			<div>
				<section className="cls-gift">{this.renderGifts()}</section>
				<button className="btn-add" onClick={this.onAddGift}>
					Add Gift
				</button>
			</div>
		);
	}
}
