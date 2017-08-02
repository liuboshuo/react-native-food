import {combineReducers} from 'redux'
import home_reducer from './home_reducer'
const root_reducer = combineReducers({
    home_reducer,
})

export default root_reducer;