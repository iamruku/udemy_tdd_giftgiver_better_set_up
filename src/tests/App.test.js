import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import './setupTests';

describe('App', () => {
	const wrapper = shallow(<App></App>);

	describe('initial dom content', () => {
		it('renders wrapper', () => {
			expect(wrapper).toMatchSnapshot();
		});

		it('should have a button with class `btn-add`', () => {
			expect(wrapper.find('.btn-add').exists()).toBe(true);
		});
	});

	describe('initial state content', () => {
		it('should have a `gifts` array initialized to empty', () => {
			expect(wrapper.state().gifts).toEqual([]);
		});
	});

	describe('helper methods', () => {
		describe('getNewId', () => {
			it('should return 1 if `numbers` parameter is undefined', () => {
				expect(wrapper.instance().getNewId(undefined)).toEqual(1);
			});
			it('should return 1 if `numbers` parameter is empty array', () => {
				expect(wrapper.instance().getNewId([])).toEqual(1);
			});
			it('should return the max id + 1 if numbers has values', () => {
				expect(wrapper.instance().getNewId([1, 2, 3])).toEqual(4);
			});
		});
	});

	describe('add new gift button', () => {
		const id = 1;

		beforeEach(() => {
			wrapper.find('.btn-add').simulate('click');
		});

		afterEach(() => {
			wrapper.setState({ gifts: [] });
		});

		it('should add a new gift to the `state` on click', () => {
			expect(wrapper.state().gifts).toEqual([{ id }]);
		});

		it('should add a new child to the `cls-gifts` section', () => {
			expect(wrapper.find('.cls-gift').children().length).toEqual(id);
		});

		it('should add a new child to the `cls-gifts` section', () => {
			expect(
				wrapper
					.find('.cls-gift')
					.find('Gift')
					.exists()
			).toBe(true);
		});

		describe('delete gift', () => {
			beforeEach(() => {
				wrapper.instance().removeGift(id);
			});

			it('removes the gift from `state`', () => {
				expect(wrapper.state().gifts).toEqual([]);
			});
		});
	});
});
