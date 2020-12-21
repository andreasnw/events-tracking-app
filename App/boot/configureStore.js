import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducers from '@redux/reducers';

const middlewares = [ thunk, promise ];

export const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
)

export const persistor = persistStore(store);
