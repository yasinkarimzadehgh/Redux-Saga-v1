import { all } from "redux-saga/effects";
import { todosSaga } from "./todosSaga";

export function* rootSaga() {
    return yield all(
        [todosSaga()]
    )

}