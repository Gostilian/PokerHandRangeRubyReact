import React from 'react';
import MainPage from '../../src/containers/MainPage';
import { handsInRange } from '../../src/containers/MainPage/ProgressIndicator';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import { initialState } from '../../src/containers/MainPage/reducer';
import history from '../../src/utils/history';
import configureStore from '../../src/configureStore';
import RangeObject from '../../src/containers/MainPage/EngineClasses/RangeObject';
import { CardHandSuitBuilder } from '../../src/containers/MainPage/EngineClasses/CardHandSuitBuilder';

Enzyme.configure({ adapter: new Adapter() });

const store = configureStore(initialState, history);

function setup() {
	const props = initialState;

	const enzymeWrapper = shallow(
		<Provider store={store}>
			<MainPage {...props} />
		</Provider>
	);

	return {
		props,
		enzymeWrapper
	};
}
describe('MainPage Container', () => {
	test('renders an element on the page', () => {
		const { enzymeWrapper } = setup();

		expect(enzymeWrapper.length).toBe(1);
	});

	describe('handsInRange should return false when given an empty range', () => {
		const range = initialState.ranges.map(({ Street, BetType }) => {
			return new RangeObject(Street, BetType, []);
		});
		const street = 'Preflop';

		expect(handsInRange(range, street)).toBe(false);
	});

	describe('handsInRange should return true when given a range with AA', () => {
		const range = initialState.ranges.map((range) => {
			if (range.Street == 'Preflop')
				return new RangeObject('Preflop', range.BetType, [ new CardHandSuitBuilder().build('A', 'A') ]);
			else return new RangeObject(range.Street, range.BetType, []);
		});
		const street = 'Preflop';

		expect(handsInRange(range, street)).toBe(true);
	});
});
