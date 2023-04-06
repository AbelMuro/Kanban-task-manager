export function SideBarReducer(state = true, action){
    switch(action.type){
        case 'set':
            return action.show;
        case 'get':
            return state;
        default:
            return state;
    }
}