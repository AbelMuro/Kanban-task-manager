import { SideBarReducer, BoardReducer } from "./Reducers.js";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    showSidebar: SideBarReducer,
    board: BoardReducer
});

export default RootReducer;