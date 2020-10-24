import React,{useReducer} from "react";
import {ContextProvider} from "./index";
import reducer from "./combineReducer";

const initialState = {user:{}, ui:{} };

const StoreProvider = (props) =>{
	return <ContextProvider value={useReducer(reducer, initialState)}>
		{props.children}
	</ContextProvider>;
};
export default StoreProvider;