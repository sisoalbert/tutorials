import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {combineReducers} from "redux";
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import counterReducer from './features/counter/counterSlice';

const reducers = combineReducers({
  counter: counterReducer
});

const persistConfig = {
    key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;