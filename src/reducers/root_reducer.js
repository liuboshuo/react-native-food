import {combineReducers} from 'redux'
import home_reducer from './home_reducer'
import food_reducer from './food_reducer'
const root_reducer = combineReducers({
    home_reducer,
    food_reducer
})

export default root_reducer;