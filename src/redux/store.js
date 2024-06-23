import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './Reducers';
import { incrementAsync } from './Actions';
import { rootSaga } from './Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    counterReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;