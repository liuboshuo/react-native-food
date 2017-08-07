import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import root_reducer from "../reducers/root_reducer";

//  中间件配置store  thunkMiddleware (异步)
const createStoreWithMWare = applyMiddleware(thunkMiddleware)(createStore)

export default function configureStore(state) {

    const store = createStoreWithMWare(root_reducer,state)

    return store;
}