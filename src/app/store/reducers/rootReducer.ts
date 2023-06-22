import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice'
import notificationsReducer from './notificationsSlice'
const rootReducer = combineReducers({
    authReducer,
    notificationsReducer
})

export default rootReducer;
