import { combineReducers } from 'redux-immutable'
import CommonReducer from 'common/reducers'
import AppPageReducer from 'pages/reducers'

export default combineReducers({
	CommonReducer,
	AppPageReducer,
})
