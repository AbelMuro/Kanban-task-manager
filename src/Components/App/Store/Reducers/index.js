import { SideBarReducer } from "./Reducers.js";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    showSidebar: SideBarReducer
});

export default RootReducer;