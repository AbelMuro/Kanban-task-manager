import { SideBarReducer, BoardReducer, SwitchThemeReducer ,OpenAddBoardDialog, OpenAddColumnDialog} from "./Reducers.js";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    showSidebar: SideBarReducer,
    board: BoardReducer,
    switchTheme : SwitchThemeReducer,
    addBoard: OpenAddBoardDialog,
    addColumn: OpenAddColumnDialog,
});

export default RootReducer;