import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./store/mainReducer";
import { Provider } from "react-redux";
import Header from "./header";
import * as serviceWorker from "./serviceWorker";
import "./styles.css";
import App from "./App";

let store = createStore(reducer);

// function App() {
//   return (
//     <div className="App">
//       <Header />
//     </div>
//   );
// }

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

serviceWorker.unregister();