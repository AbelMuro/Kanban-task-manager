import { SideBarReducer, BoardReducer, OpenAddBoardDialog, OpenAddColumnDialog} from "./Reducers.js";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    showSidebar: SideBarReducer,
    board: BoardReducer,
    addBoard: OpenAddBoardDialog,
    addColumn: OpenAddColumnDialog,
});

export default RootReducer;