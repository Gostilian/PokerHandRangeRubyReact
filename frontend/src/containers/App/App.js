import React, { useEffect, useState, useRef, Fragment, memo } from "react";
import "./App.css";
import MainPage from "../MainPage/index";
// import { useStripe } from "../../HOC/useStripe/useStripe";
// import { StripeProvider, Elements } from "react-stripe-elements";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { useDispatch, useSelector, Provider } from "react-redux";
import { useInjectReducer } from "../../HOC/useInjectReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import styled from "styled-components";

import reducer from "../MainPage/reducer";
import Navbar from "../../components/NavBar";
import MainContainer from "../../components/MainContainer";

import Tour from "reactour";
import { ErrorBoundary } from "../../utils/ErrorBoundary";

import { initialState } from "./reducer.js";
import history from "../../utils/history";
import configureStore from "../../configureStore";
import { createWaiter } from "../../create-waiter";

import { useAuth0 } from "@auth0/auth0-react";

const key = "global";

const StyledFragment = styled.div`
  background-color: #e2e3e6;
`;
const steps = [
  {
    selector: "button#firstChoice",
    content:
      "First pick your betting pattern, Raise/4Bet/Call, in this case you will select your strongest hands that you always raise with. Note: you may have to click back and forth to get the right button highlighted. "
  },
  {
    selector: "button#colorButtonAA",
    content:
      "AA is by far the strongest hand in holdem, select this hand by turning the table column green to go in your strongest hand range "
  },
  {
    selector: "button#secondChoice",
    content:
      "Next we are going to take one of our strongest hands and turn it into a bluff when someone raises us. Select Raise4BetFold next. "
  },
  {
    selector: "button#colorButtonAQo",
    content:
      "AQo makes the perfect bluffing hand. Its strong enough to raise first in, and has cards that block the strongest hands in the game. Go ahead and select AQo."
  },
  {
    selector: "#Raise4BetValueTutorial",
    content:
      "How often are we bluffing raising just AA and AQo? Looks like we valuebet with aces 33% of the time!"
  },
  {
    selector: "#Raise4BetBluffTutorial",
    content:
      "How often are we bluffing raising just AA and AQo? Looks like we bluff twice as often at 67% as much as we valuebet. This ratio is much too high, we should now add kings and AKs to our range to balance our range."
  },
  {
    selector: "button#firstChoice",
    content:
      "We better put more hands into our value range, so lets go ahead and select Raise4BetCall again. "
  },
  {
    selector: "button#colorButtonKK , button#colorButtonAKs",
    content: "You can select AKs, to balance out your range."
  },
  {
    selector: "#Raise4BetBluffTutorial",
    content:
      "This is fantastic, now we are only bluffing approximately less than half the time! If someone tries to rebluff our raise back at them, they will be greeted with an allin against a very strong hand much too often for this to be a profitable move"
  }
];
const store = configureStore(initialState, history);

const waitForData = createWaiter(store, state => state);

const App = ({ global }) => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    getAccessTokenSilently
  } = useAuth0();
  useInjectReducer({ key, reducer });
  // const [stripe, setStripe] = useState(null);
  const username = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [isTourOpen, updateTourOpen] = useState(true);
  const [bearerToken, setBearerToken] = useState(null);
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    localStorage.setItem("Bearer", bearerToken);
  }, [bearerToken]);

  const closeTour = () => updateTourOpen(false);

  const getUserMetadata = async () => {
    const domain = "dev-824eb3ar.us.auth0.com";

    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user"
      });

      setBearerToken(accessToken);

      const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

      const metadataResponse = await fetch(userDetailsByIdUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      const { user_metadata } = await metadataResponse.json();

      setUserMetadata(user_metadata);
      return accessToken;
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <ErrorBoundary>
      <MainContainer>
        <Navbar
          isAuthenticated={isAuthenticated}
          loginWithRedirect={loginWithRedirect}
          logout={logout}
          user={user}
          getAccessTokenSilently={getAccessTokenSilently}
          getUserMetadata={getUserMetadata}
        />
        <MainPage />
        <Tour steps={steps} isOpen={isTourOpen} onRequestClose={closeTour} />
      </MainContainer>
    </ErrorBoundary>
  );
};

const withConnect = connect(null, null);

export default compose(withConnect, memo)(App);
