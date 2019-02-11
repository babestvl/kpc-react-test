import { handleAction } from 'redux-actions'
import constants from 'common/constants'
import { List } from 'immutable'
import setValueReducer from './setValueReducer'

export const FormsReducer = handleAction(
	constants.SUBMIT_FORM,
	setValueReducer,
	List(),
)
