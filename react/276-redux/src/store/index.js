import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/count';
import authReducer from './reducers/auth';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
