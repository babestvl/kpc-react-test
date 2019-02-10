import { combineReducers } from 'redux-immutable'
import createSetValueReducer from './createSetValueReducer'

export default name =>
	combineReducers({
		uid: createSetValueReducer(name),
		value: createSetValueReducer(name),
	})
