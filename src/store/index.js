import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import '../config/reactotron';

import reducers from './ducks';
import sagas from './sagas';

const Middleware = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

Middleware.push(sagaMiddleware);

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...Middleware),
    console.tron.createEnhancer(),
  ),
);
sagaMiddleware.run(sagas);

export default store;
