import Immutable from 'immutable'

export default function execute_reducer(state,action,reducer_tables) {
    const real_state = state || Immutable.Map()

    const reducer = reducer_tables[action.type];
    if (reducer){
        return reducer(real_state,action.data);
    }
    return real_state;
}