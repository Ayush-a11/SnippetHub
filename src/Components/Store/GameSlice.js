import { createSlice } from "@reduxjs/toolkit";

const initialState= {
	Current:'',
	data: null
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
		}
	}
})

export const {setData,clearData} =GameSlice.actions;

const reducers= GameSlice.reducer;
export default reducers