import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaConfig from 'redux-saga'
import { TodosReducer } from "./todos/todosReducer";
import { rootSaga } from "./saga/rootSaga";

const combineReducer = combineReducers({
    todosReducer: TodosReducer
})
const sagaConfig = createSagaConfig()
export const rootStore = createStore(combineReducer, applyMiddleware(sagaConfig))

sagaConfig.run(rootSaga)