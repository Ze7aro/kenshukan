import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { compose } from "redux";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  {
    reducer: reducer,
  },

  composeEnhancers()
);

export default store;
