import { combineReducers } from 'redux'
import itemReducer from './itemReducer'
import { cpus } from 'os';

export default combineReducers({
    item: itemReducer
})