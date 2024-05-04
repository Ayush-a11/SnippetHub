import { configureStore } from '@reduxjs/toolkit'
import GameSlice from './GameSlice';
import reducers from './GameSlice';

const store=configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
		  serializableCheck: false,
		}),

})

export default store;