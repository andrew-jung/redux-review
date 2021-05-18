import { render } from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import counter from "./counterSlice";

const store = createStore(counter);
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
