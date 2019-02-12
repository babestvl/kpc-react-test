import { handleActions } from 'redux-actions'
import { List } from 'immutable'
import setValueReducer from './setValueReducer'
import initStoreReducer from './initStoreReducer'
import deleteValueReducer from './deleteValueReducer'

export const FormsReducer = handleActions(
	{
		INIT_STORE: initStoreReducer,
		SUBMIT_FORM: setValueReducer,
		DELETE_FORM: deleteValueReducer,
	},
	List(),
)
