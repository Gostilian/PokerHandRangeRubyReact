/**
 * The home state selectors
 */

import { createSelector } from "reselect";

import { initialState } from "./reducer";
import Scenario from "./ScenarioLoader/Scenario";
import Scenarios from "./ScenarioLoader/Scenarios";
import RangeObject from "./EngineClasses/RangeObject";
import { CardHandSuitBuilder } from "./EngineClasses/CardHandSuitBuilder";
import { RangeObjectCollection } from "./EngineClasses/RangeObjectCollection";

const copyHands = hands =>
  hands.map(hand =>
    new CardHandSuitBuilder().build(
      hand.length <= 3 ? hand.substr(0, 1) : hand.substr(0, 2),
      hand.length <= 3 ? hand.substr(1, 1) : hand.substr(2, 2),
      hand.length <= 3 ? hand.substr(2, hand.length - 1) : ""
    )
  );

const selectGlobal = state => state.global || initialState; //??
const selectRouter = state => state.router;

const selectUser = state => state.user;

const makeSelectMode = () =>
  createSelector(selectGlobal, globalState => globalState.mode);

const makeSelectRangeRepoIP = () =>
  createSelector(selectGlobal, (globalState) =>
  new RangeObjectCollection(globalState.rangeRepoIP).displayRange());

const makeSelectRangeRepoOOP = () =>
	createSelector(selectGlobal, (globalState) =>
		new RangeObjectCollection(globalState.rangeRepoOOP).displayRange()
	);
const makeSelectSelectedStreetBetType = () => {
  return createSelector(selectGlobal, global => 
      new RangeObjectCollection(global.ranges).displayRangeByStreet({ street: global?.mode?.street })
  );
};

const makeSelectSelectedStreet = () =>
  createSelector(selectGlobal, global =>
    new RangeObjectCollection(global?.ranges)
    .displayRangeByStreet({ Street: global?.mode?.street, useTwoFlopSizes: global?.mode?.useTwoFlopSizes})
  );

const makeSelectRangesPreviousStreet = () =>
  createSelector(selectGlobal, global =>
    new RangeObjectCollection(global.ranges).displayPreviousRange({Street: global?.mode?.street, isIP: global?.mode?.isIP}));

//FIXME: Needs a rename because its all ranges
const makeSelectRangesPreflop = () =>
  createSelector(selectGlobal, global =>
    new RangeObjectCollection(global.ranges).displayRangeByStreet({ Street: 'Preflop' })
  );

const makeSelectRange = () =>
  createSelector(selectGlobal, globalState =>
    new RangeObjectCollection(globalState.ranges).displayRange()
  );

const makeSelectUser = () => createSelector(selectUser, userState => userState);

const makeSelectDeadcards = () =>
  createSelector(selectGlobal, globalState => globalState.deadcards);


const makeSelectPosition = () =>
  createSelector(selectGlobal, globalState => globalState.mode.isIP);

const makeSelectOtherRange = () => {
  return createSelector(selectGlobal, globalState => {
    let rangeRepoPreflop;
    if (globalState.mode.isIP)
      rangeRepoPreflop = new RangeObjectCollection(globalState.rangeRepoIP).displayRange()
    else
      rangeRepoPreflop = new RangeObjectCollection(globalState.rangeRepoOOP).displayRange()
    return rangeRepoPreflop;
  });
};

const makeSelectLoadEquities = () =>
  createSelector(selectGlobal, globalState => globalState.loadEquities);

const makeSelectHandEquities = () =>
  createSelector(selectGlobal, globalState => globalState.handEquities);

const makeSelectScenariosClass = () =>
  createSelector(
    selectGlobal,
    globalState =>
      new Scenarios(
        globalState.scenarioBoards.map(board => new Scenario(board, null, null))
      )
  );

export {
  selectGlobal,
  selectRouter,
  makeSelectRangeRepoIP,
  makeSelectRangeRepoOOP,
  makeSelectSelectedStreetBetType,
  makeSelectSelectedStreet,
  makeSelectRangesPreviousStreet,
  makeSelectRangesPreflop,
  makeSelectRange,
  makeSelectMode,
  makeSelectUser,
  makeSelectDeadcards,
  makeSelectPosition,
  makeSelectLoadEquities,
  makeSelectOtherRange,
  makeSelectHandEquities,
  makeSelectScenariosClass
};
