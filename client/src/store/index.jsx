
import { configureStore } from '@reduxjs/toolkit';
import errorReducer from '../store/HandleErrorRedux';

export const store = configureStore({
  reducer: {
    error: errorReducer,
   
  }
});

export default store;
