import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { initialState } from '../../../src/containers/MainPage/reducer';
import history from '../../../src/utils/history';
import configureStore from '../../../src/configureStore.js';

import RangeObject from '../../../src/containers/MainPage/EngineClasses/RangeObject';
import { CardHandSuitBuilder } from '../../../src/containers/MainPage/EngineClasses/CardHandSuitBuilder';

describe('RangeObject Class', () => {
	test('can be constructed with a street, streetAction, and array of hands', () => {
		const rangeObject = new RangeObject('Preflop', 'Raise4BetCall', []);

		expect(rangeObject).toBeDefined();
	});

	test('can be transformed into a data value object to be stored', () => {
		const AKsuited = new CardHandSuitBuilder().build('A', 'K', 's');
		const AA = new CardHandSuitBuilder().build('A', 'A');
		const AKoffsuit = new CardHandSuitBuilder().build('A', 'K', 'o');
		const rangeObject = new RangeObject('Preflop', 'Raise4BetCall', [ AKsuited, AA, AKoffsuit ]);

		expect(rangeObject.getRangesObject()).toStrictEqual({
			Street: 'Preflop',
			BetType: 'Raise4BetCall',
			hands: [ 'AKs', 'AA', 'AKo' ]
		});
	});
	test('can be transformed into a data value object to be stored', () => {
		const AKsuited = new CardHandSuitBuilder().build('A', 'K', 's');
		const AA = new CardHandSuitBuilder().build('A', 'A');
		const AKoffsuit = new CardHandSuitBuilder().build('A', 'K', 'o');
		const rangeObject = new RangeObject('Preflop', 'Raise4BetCall', [ AKsuited, AA, AKoffsuit ]);

		expect(rangeObject.displayInfo()).toStrictEqual({
			AA: {
				colorCards: '#0F6125',
				equity: 'n/a'
			},
			AKo: {
				colorCards: '#0F6125',
				equity: 'n/a'
			},
			AKs: {
				colorCards: '#0F6125',
				equity: 'n/a'
			}
		});
	});
	test('can be transformed into a data value object to be stored', () => {
		const AKsuited = new CardHandSuitBuilder().build('A', 'K', 's');
		const AA = new CardHandSuitBuilder().build('A', 'A');
		const AKoffsuit = new CardHandSuitBuilder().build('A', 'K', 'o');
		const rangeObject = new RangeObject('Preflop', 'Raise4BetCall', [ AKsuited, AA, AKoffsuit ]);

		expect(rangeObject.toCardHandRange()).toStrictEqual([ AKsuited, AA, AKoffsuit ]);
	});

	test('can be transformed into a data value object to be stored', () => {
		const AKsuited = new CardHandSuitBuilder().build('A', 'K', 's');
		const AA = new CardHandSuitBuilder().build('A', 'A');
		const AKoffsuit = new CardHandSuitBuilder().build('A', 'K', 'o');
		const rangeObject = new RangeObject('Preflop', 'Raise4BetCall', [ AKsuited, AA, AKoffsuit ]);

		expect(rangeObject.filterForHandsInRange('Preflop')).toStrictEqual([ AKsuited, AA, AKoffsuit ]);
	});

	test('displayFriendlyRangeSuit displays a valid range for AA, AKs, AQo', () => {
		const AAhand = new CardHandSuitBuilder().build('A', 'A');
		const AKohand = new CardHandSuitBuilder().build('Q', 'A');
		const AKshand = new CardHandSuitBuilder().build('A', 'K');

		const rangeObject = new RangeObject('Preflop', 'Raise4BetCall', [ AAhand, AKohand, AKshand ]);

		expect(rangeObject.getFriendlyRangeOutput()).toEqual('AA, AQo, AKs');
	});

	test('displayFriendlyRangeSuit displays a condensed valid range for AA, AKs, AKo', () => {
		const AAhand = new CardHandSuitBuilder().build('A', 'A');
		const AKohand = new CardHandSuitBuilder().build('K', 'A');
		const AKshand = new CardHandSuitBuilder().build('A', 'K');

		const rangeObject = new RangeObject('Preflop', 'Raise4BetCall', [ AAhand, AKohand, AKshand ]);

		expect(rangeObject.getFriendlyRangeOutput()).toEqual('AA, AK');
	});

	test('displayFriendlyRangeSuit displays a condensed valid range for AA, As9s, Tc8d', () => {
		const AAhand = new CardHandSuitBuilder().build('A', 'A');
		const A9sshand = new CardHandSuitBuilder().build('A', '9', 'ss');
		const AKshand = new CardHandSuitBuilder().build('A', 'K');

		const rangeObject = new RangeObject('Preflop', 'Raise4BetCall', [ AAhand, A9sshand, AKshand ]);

		expect(rangeObject.getFriendlyRangeOutput()).toEqual('AA, AKs, As9s');
	});
	test('displayInfo displays a condensed valid range for AA, As9s, AK', () => {
		const AAhand = new CardHandSuitBuilder().build('A', 'A');
		const A9sshand = new CardHandSuitBuilder().build('A', '9', 'ss');
		const AKshand = new CardHandSuitBuilder().build('A', 'K');

		const rangeObject = new RangeObject('Preflop', 'Raise4BetCall', [ AAhand, A9sshand, AKshand ]);

		expect(rangeObject.displayInfo()).toEqual({
			"AA": 
				{"colorCards": "#0F6125", "equity": "n/a"}, 
			"AKs": 
				{"colorCards": "#0F6125", "equity": "n/a"}, 
			"As9s": 
				{"colorCards": "#0F6125", "equity": "n/a"}
			});
	});
	test('displayInfo displays a condensed valid range for AA, As9s, AK', () => {
		const AAhand = new CardHandSuitBuilder().build('A', 'A');
		const A9sshand = new CardHandSuitBuilder().build('A', '9', 'ss');
		const AKshand = new CardHandSuitBuilder().build('A', 'K');

		const rangeObject = new RangeObject('Flop', 'Bluff', [ AAhand, A9sshand, AKshand ]);

		expect(rangeObject.displayInfo()).toEqual({
			AA: 
				{colorCards: "#ed87a7", equity: "n/a"}, 
			AKs: 
				{colorCards: "#ed87a7", equity: "n/a"}, 
			As9s: 
				{colorCards: "#ed87a7", equity: "n/a"}
			});
	});
	test('displayInfo displays a condensed valid range for AA, As9s, AK', () => {
		const AAhand = new CardHandSuitBuilder().build('A', 'A');
		const A9sshand = new CardHandSuitBuilder().build('A', '9', 'ss');
		const AKshand = new CardHandSuitBuilder().build('A', 'K');

		const rangeObject = new RangeObject('Flop', 'CheckFold', [ AAhand, A9sshand, AKshand ]);

		expect(rangeObject.displayInfo()).toEqual({
			AA: 
				{colorCards: "#dc73ff", equity: "n/a"}, 
			AKs: 
				{colorCards: "#dc73ff", equity: "n/a"}, 
			As9s: 
				{colorCards: "#dc73ff", equity: "n/a"}
			});
	});
	test('displayInfo displays a condensed valid range for AA, As9s, AK', () => {
		const AAhand = new CardHandSuitBuilder().build('A', 'A');
		const A9sshand = new CardHandSuitBuilder().build('A', '9', 'ss');
		const AKshand = new CardHandSuitBuilder().build('A', 'K');

		const rangeObject = new RangeObject('Flop', 'CheckCall', [ AAhand, A9sshand, AKshand ]);

		expect(rangeObject.displayInfo()).toEqual({
			AA: 
				{colorCards: "#3ac0ff", equity: "n/a"}, 
			AKs: 
				{colorCards: "#3ac0ff", equity: "n/a"}, 
			As9s: 
				{colorCards: "#3ac0ff", equity: "n/a"}
			});
	});
	test('displayInfo displays a condensed valid range for AA, As9s, AK', () => {
		const AAhand = new CardHandSuitBuilder().build('A', 'A');
		const A9sshand = new CardHandSuitBuilder().build('A', '9', 'ss');
		const AKshand = new CardHandSuitBuilder().build('A', 'K');

		const rangeObject = new RangeObject('Flop', 'SmallValuebet', [ AAhand, A9sshand, AKshand ]);

		expect(rangeObject.displayInfo()).toEqual({
			AA: 
				{colorCards: "#003d3e", equity: "n/a"}, 
			AKs: 
				{colorCards: "#003d3e", equity: "n/a"}, 
			As9s: 
				{colorCards: "#003d3e", equity: "n/a"}
			});
	});
	test('displayInfo displays a condensed valid range for AA, As9s, AK', () => {
		const AAhand = new CardHandSuitBuilder().build('A', 'A');
		const A9sshand = new CardHandSuitBuilder().build('A', '9', 'ss');
		const AKshand = new CardHandSuitBuilder().build('A', 'K');

		const rangeObject = new RangeObject('Flop', 'SmallBluff', [ AAhand, A9sshand, AKshand ]);

		expect(rangeObject.displayInfo()).toEqual({
			AA: 
				{colorCards: "#8A4000", equity: "n/a"}, 
			AKs: 
				{colorCards: "#8A4000", equity: "n/a"}, 
			As9s: 
				{colorCards: "#8A4000", equity: "n/a"}
			});
	});
});
