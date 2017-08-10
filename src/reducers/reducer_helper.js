import Immutable from 'immutable'

/**
 * action 的数据都放在data对象 才你可以确保正确
 * 获取调用的reducer的function
 * @param state
 * @param action
 * @param reducer_tables
 * @returns {*}
 */
export default function execute_reducer(state,action,reducer_tables) {
    const real_state = state || Immutable.Map()

    const reducer = reducer_tables[action.type];
    if (reducer){
        return reducer(real_state,action.data);
    }
    return real_state;
}