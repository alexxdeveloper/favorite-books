/* eslint-disable import/no-anonymous-default-export */
import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import favoritesReducer from './Favorites/Favorites.Reducer';
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    favorites: favoritesReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

