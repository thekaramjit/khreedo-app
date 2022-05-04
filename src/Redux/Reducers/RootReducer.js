import { combineReducers } from "redux";
import {quantityReducer} from './quantityReducer'
import { getIdReducer } from "./getproductIDReducer";
import { totalPriceReducer } from "./totalPriceReducer";
import { cartItemReducer } from "./cartItemsReducer";

export const rootReducer=combineReducers({quantityReducer,getIdReducer,totalPriceReducer,cartItemReducer})