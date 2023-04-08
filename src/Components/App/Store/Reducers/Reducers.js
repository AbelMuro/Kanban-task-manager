export function SideBarReducer(state = true, action){
    switch(action.type){
        case 'set sidebar':
            return action.show;
        case 'get sidebar':
            return state;
        default:
            return state;
    }
}

export function BoardReducer(state = null, action){
    switch(action.type){
        case 'set board':
            return action.board;
        case 'get board':
            return state;
        default: 
            return state;
    }
}