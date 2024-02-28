import { createSlice } from "@reduxjs/toolkit";

const initialState= {
	Current:'',
	data: null
}

const GameSlice = createSlice({
	name:'Game',
	initialState,
	reducers:{
		setData(state,action){
			state.data=action.payload
		},
		clearData(state){
			state.data=null;
		}
	}
})

const {setData,clearData} =GameSlice.actions;

const reducers= GameSlice.reducer;
export default reducers