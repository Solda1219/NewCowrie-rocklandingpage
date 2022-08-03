import { combineReducers } from "redux";
import config from './templateConfig/';
import Icons from "./icons/";
import network from "./network/";
import saleStatus from "./salestatus";
// import 
const rootReducer = combineReducers({
  config,
  Icons,
  network,
  saleStatus,
});

export default rootReducer;