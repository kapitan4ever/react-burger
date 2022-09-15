import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import "./vendor/normalize.module.css";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./services/reducers";
import {
  BrowserRouter as Router,
  // @ts-ignore
} from "react-router-dom";
import {WS_ORDERS_ALL, WS_ACTIONS } from "./utils/constants";
import { socketMiddleware } from "./services/middleware/socketMiddleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, socketMiddleware(WS_ORDERS_ALL, WS_ACTIONS)))
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

reportWebVitals();
