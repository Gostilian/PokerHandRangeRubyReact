import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import throttle from "lodash/throttle";
import { saveState } from "./localStorage";
import configureStore from "./configureStore";
import { initialState } from "./containers/MainPage/reducer.js";
import history from "./utils/history";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "styled-components";

import UserRegister from "./containers/Auth/Register/UserRegister.js";
import Login from "./containers/Auth/Login/UserLogin.js";

//const store = createStore(combineReducers({rootReducer, handRangesAvailable}), applyMiddleware(thunk));
// Create redux store with history
//const initialState = {};
const store = configureStore(initialState, history);

store.subscribe(
  throttle(() => {
    const { global, user } = store.getState();
    saveState({ global, user });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={{ main: "mediumseagreen" }}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/register" component={UserRegister} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();