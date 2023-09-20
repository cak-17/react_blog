import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import postsReducer from './postsSlice';
import mainReducer from './mainSlice';
import authReducer from './authSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootsReducer = combineReducers({
    posts: postsReducer,
    main: mainReducer,
    auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootsReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
