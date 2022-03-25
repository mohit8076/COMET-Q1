import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { Values } from "redux-form-website-template";
import showResults from "./showResults";
import FieldLevelValidationForm from "./FieldLevelValidationForm";
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import SyncValidationForm from "./SyncValidationForm";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Field-Level Validation</h2>
      <FieldLevelValidationForm onSubmit={showResults} />
      <h2>Synchronous Validation</h2>
      <SyncValidationForm onSubmit={showResults} />
      {/* <Values form="fieldLevelValidation" /> */}
    </div>
  </Provider>,
  rootEl
);
