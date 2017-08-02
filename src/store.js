import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'react-thunk'
import root_reducer from "./reducers/root_reducer";

const createStoreWithMWare = applyMiddleware(thunkMiddleware)(createStore)

export default function config_store(initialState=null) {

    return createStoreWithMWare(initialState,root_reducer)
}