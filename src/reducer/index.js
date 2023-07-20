import { combineReducers } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
