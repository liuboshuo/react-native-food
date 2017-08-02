import Immutable from 'immutable'
import execute_reducer from "./reducer_helper";

const initialState = Immutable.Map({

})

function demo(state,data) {
    appLog(data)
    return state;
}

const tables = {
    "type":demo
}

export default function home_reducer(state=initialState,action) {
    return execute_reducer(state,action,tables)
}