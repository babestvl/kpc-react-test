import { handleAction, handleActions } from 'redux-actions'
import { List } from 'immutable'
import constants from 'common/constants'
import setValueReducer from './setValueReducer'
import initStoreReducer from './initStoreReducer'
import deleteValueReducer from './deleteValueReducer'
import deleteValuesReducer from './deleteValuesReducer'
import setShowDataReducer from './setShowDataReducer'

export const FormsReducer = handleActions(
	{
		INIT_STORE: initStoreReducer,
		SUBMIT_FORM: setValueReducer,
		DELETE_FORM: deleteValueReducer,
		DELETE_FORMS: deleteValuesReducer,
	},
	List(),
)

export const ShowDataReducer = handleAction(
	constants.SET_SHOW_DATA,
	setShowDataReducer,
	List(),
)
