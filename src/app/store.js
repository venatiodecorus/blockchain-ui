import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import accountReducer from '../features/accountList/accountSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    accountList: accountReducer
  },
});
