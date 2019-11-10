import React from 'react';
import { shallow } from 'enzyme';
import Gift from '../components/Gift';
import './setupTests';

describe('Gift', () => {
	const _removeGift = jest.fn();
	const id = 1;
	const props = { gift: { id }, removeGift: _removeGift };
	const wrapper = shallow(<Gift {...props}></Gift>);

	describe('initial dom content', () => {
		it('renders wrapper', () => {
			expect(wrapper).toMatchSnapshot();
		});

		it('should have an input field for name', () => {
			expect(
				wrapper
					.find('.cls-form')
					.find('.inp-person')
					.exists()
			).toBe(true);
		});

		it('should have an input field for gift', () => {
			expect(
				wrapper
					.find('.cls-form')
					.find('.inp-gift')
					.exists()
			).toBe(true);
		});

		it('should have a remove gift button', () => {
			expect(wrapper.find('.btn-delete').exists()).toBe(true);
		});
	});

	describe('initial state content', () => {
		it('should initialize person to empty', () => {
			expect(wrapper.state().person).toEqual('');
		});
		it('should initialize gift to empty', () => {
			expect(wrapper.state().gift).toEqual('');
		});
	});

	describe('value change in person input', () => {
		const personString = 'test_person';

		beforeEach(() => {
			wrapper
				.find('.inp-person')
				.simulate('change', { target: { value: personString } });
		});

		it('updates the person in `state`', () => {
			expect(wrapper.state().person).toEqual(personString);
		});
	});

	describe('value change in gift input', () => {
		const giftString = 'test_gift';

		beforeEach(() => {
			wrapper
				.find('.inp-gift')
				.simulate('change', { target: { value: giftString } });
		});

		it('updates the gift in `state`', () => {
			expect(wrapper.state().gift).toEqual(giftString);
		});
	});

	describe('click on delete gift', () => {
		beforeEach(() => {
			wrapper.find('.btn-delete').simulate('click');
		});

		it('should call the removeGift callback with id', () => {
			expect(_removeGift).toHaveBeenCalledWith(id);
		});
	});
});
