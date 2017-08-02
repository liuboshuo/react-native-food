import Immutable from 'immutable'
const initialState = Immutable.Map({

})

export default function home_reducer(state=initialState,action) {

    switch (action.type){
        case "dsd":
            return state;
        default:
            return state;
    }
}