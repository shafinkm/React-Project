import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";

/** IMPORTING REDUX **/
import { combineReducers, createStore } from "redux";
import productReducer from "./reducers/products-reducer";
import userReducer from "./reducers/user-reducer";

const allReducers = combineReducers({
  product: productReducer,
  users: userReducer
});

/** CREATING REDUX STORE **/
const store = createStore(
  allReducers,
  { product: "iPhone", users: "Michale" },
  window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());

//import Counters from "./components/counters.jsx";
//import Userlist from "./components/userlist.jsx";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//ReactDOM.render(<Counters />, document.getElementById("root"));
//ReactDOM.render(<Userlist />, document.getElementById("userdata"));
registerServiceWorker();
