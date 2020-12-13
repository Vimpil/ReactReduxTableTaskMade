import React from "react";

import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./store/mainReducer";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "./styles.css";
import App from "./App";


 /* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer, /* preloadedState, */
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 /* eslint-enable */;

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

serviceWorker.unregister();
