import {NEW_ACTION} from './actions'
export default (state,action) =>{
    switch(action.type){
        case NEW_ACTION: return {...state, val:true}
        default: return state
    }
}