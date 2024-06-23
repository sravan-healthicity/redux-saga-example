import { put, takeEvery, all, delay } from 'redux-saga/effects';
import { increment } from './Actions';

function* incrementAsync() {
    yield delay(1000);
    yield put(increment());
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* rootSaga() {
    yield all([
        watchIncrementAsync()
    ]);
}