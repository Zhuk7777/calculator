import { createStore } from "redux";
import { calculateReducer } from "./calculateReducer";
import {composeWithDevTools} from 'redux-devtools-extension'


export const store = createStore(calculateReducer, composeWithDevTools())