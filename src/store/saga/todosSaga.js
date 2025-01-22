import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

async function getAPIData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return { data: response.data, message: null }
    } catch (e) { return { data: null, message: 'Something went wrong!' } }
}

export function* sagaCallBack() {
    yield put({
        type: 'REQUEST_LOADING',
    }); const result = yield call(getAPIData);
    console.log(result)
    if (result.data) {
        yield put({
            type: 'REQUEST_SUCCESS',
            payload: result.data
        });
    } else {
        yield put({
            type: 'REQUEST_FAILURE',
            payload: 'Something went wrong!'
        });

    }

}

export function* todosSaga() {
    yield takeEvery('FETCH_USERS', sagaCallBack);
}