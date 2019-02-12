import { handleActions } from 'redux-actions'
import { List } from 'immutable'
import setValueReducer from './setValueReducer'
import initStoreReducer from './initStoreReducer'

export const FormsReducer = handleActions(
	{
		INIT_STORE: initStoreReducer,
		SUBMIT_FORM: setValueReducer,
	},
	List(),
)
