import React from 'react';
import reducer, { initialState } from '../../src/containers/MainPage/reducer';
import * as types from '../../src/containers/MainPage/constants';
import { initGetScenario, initGetAllScenario } from '../../src/containers/MainPage/actions';

import nock from 'nock';
import httpResponseGetScenario from './httpResponseGetScenario.json';
import httpResponseGetAllScenario from './httpResponseGetAllScenario.json';
import Scenario from "../../src/containers/MainPage/ScenarioLoader/Scenario";
import SagaTester from 'redux-saga-tester';
import saga from '../../src/containers/MainPage/saga'
import Enzyme, { EnzymeAdapter, mount } from 'enzyme';
import { Navbar } from 'react-bootstrap';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import SaveModal from '../../src/components/NavBar/SaveModal';
import ScenarioLoader from '../../src/containers/MainPage/ScenarioLoader';
import { Provider } from 'react-redux';
import configureStore from '../../src/configureStore';
import { Button } from 'semantic-ui-react';
import { makeSelectScenariosClass } from '../../src/containers/MainPage/selectors';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
describe("Integration tests: ", () => {
    test('The reducer when action GET_SCENARIO_SUCCESS should return the new state for the reducer', async () => {
		// nock('http://localhost:3000')
		// .post('/api/private/get-scenario')
		// .reply(200, {
		// 	...httpResponseGetScenario
		// 	})
		nock('https://www.poker-range-appalyzer.com')
		.post('/api/private/get-scenario')
		.reply(200, {
			...httpResponseGetScenario
			})
		let sagaTester = null

		sagaTester = new SagaTester({initialState, reducers: reducer});

		sagaTester.start(saga);

		const scenario = new Scenario({ 
			board: 'AcTh4s', rangeRepoIP: initialState.rangeRepoIP, 
			rangeRepoOOP: initialState.rangeRepoOOP, user: 'Evan', 
			ScenarioName: 'Test Scenario', OpenerPosition: 'CO', 
			DefenderPosition: 'BU' })

		sagaTester.dispatch(initGetScenario({ scenario, token: "dummy" } ));

		await sagaTester.waitFor(types.GET_SCENARIO_SUCCESS);
		
		const finalReducerValue = sagaTester.getState();

		// await sagaTester.waitFor(getScenarioSuccess());
		expect(finalReducerValue.rangeRepoIP[0].hands).toEqual(['A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s']);
    });

    test('The reducer when action GET_ALL_SCENARIO_SUCCESS should return the new state for the reducer', async () => {
		nock('http://localhost:3000')
		.post('/api/private/get-all-scenario')
		.reply(200, {
            ...httpResponseGetAllScenario
			})
		nock('https://www.poker-range-appalyzer.com')
		.post('/api/private/get-all-scenario')
		.reply(200, {
            ...httpResponseGetAllScenario
			})
		let sagaTester = null

		sagaTester = new SagaTester({initialState, reducers: reducer});

		sagaTester.start(saga);

		const scenario = new Scenario({ 
			board: 'AcTh4s', rangeRepoIP: initialState.rangeRepoIP, 
			rangeRepoOOP: initialState.rangeRepoOOP, user: 'Evan', 
			ScenarioName: 'Test Scenario', OpenerPosition: 'CO', 
			DefenderPosition: 'BU' })

		sagaTester.dispatch(initGetAllScenario({ scenario } ));

		await sagaTester.waitFor(types.GET_ALL_SCENARIO_SUCCESS); 
		
		const finalReducerValue = sagaTester.getState();

        expect(finalReducerValue.scenarioBoards).toStrictEqual(
            {"0": ["AcAsAh", "fdsaasdfasdfasdfasdf", "BU", "MP"], 
            "1": ["Jh4h2s", "875fancyflop", "BU", "MP"], 
            "2": ["AcTs", "asdf1234", "SB", "MP"], 
            "3": ["Ac", "asfdsdfasdfasdf", "SB", "UTG"]
        });
    });

    test("a token gets passed to the saga correctly", () => {
        nock('https://www.poker-range-appalyzer.com')
		.post('/api/private/get-scenario')
		.reply(200, {
            noResponseNeeded: "fake"
			})
        
        const newInitialState = initialState;
        
        //Setup the state to have a number of Boards to load
        newInitialState.scenarioBoards.push(["Ac4c4h", "875fancyflop", "UTG", "MP"]);
        newInitialState.scenarioBoards.push(["Ac4c4h", "875fancyfUTGpped", "UTG", "MP"])
        newInitialState.scenarioBoards.push(["AcAsAh", "testFile", "UTG", "CO"]);
        
        //Create the ScenarioLoader with a state
        const store = configureStore(newInitialState, null);
        
        const navComponent = mount(<Provider store={store} ><ScenarioLoader 
          active={true}
          onCloseModal={false}
          token="dummy" /></Provider>);

        //Click on the button to load a new scenario
        const clickButtonReturnValues = navComponent.find(".load-button").get(0).props.onClick()
        
        //Token is expected to be called "dummy"
        const tokenExpectedValue = clickButtonReturnValues.data.token;
        expect(tokenExpectedValue).toEqual("dummy");
    })

});