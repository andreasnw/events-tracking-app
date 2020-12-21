import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import user from './user';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'user',
    ],
    timeout: 2000
};

const reducers = combineReducers({
    user,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
