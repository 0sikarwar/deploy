import {SET_ENTRY_POINT} from "../actions/ui";

export default (state, action)=>{
    switch(action.type){
        case SET_ENTRY_POINT: return {
            ...state, entryPoint: action.value
        }
        default: return state
    }
}