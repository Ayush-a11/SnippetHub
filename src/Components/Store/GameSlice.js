import { createSlice } from "@reduxjs/toolkit";

const initialState= {
	Current:'',
	data: null,
	isLoggedIn: false,
	user: null

}

const GameSlice = createSlice({
	name:'Movie',
	initialState,
	reducers:{
		setData(state,action){
			state.data=action.payload;
			state.Current=action.payload;
		},
		clearData(state){
			state.data=null;
			state.Current=null;
		},
		setLogin(state,action){
			console.log(action.payload)
			state.user=action.payload;
			state.isLoggedIn=true;
		},
		setLogout(state){
			state.user=null;
			state.isLoggedIn=false;
		}
	}
})

export const {setData,clearData,setLogin,setLogout} =GameSlice.actions;

const reducers= GameSlice.reducer;
export default reducers