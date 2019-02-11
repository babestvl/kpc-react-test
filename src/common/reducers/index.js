import { handleAction } from 'redux-actions'
import constants from 'common/constants'
import { List } from 'immutable'
import setValueReducer from './setValueReducer'
const defaultState = List()

export const FormsReducer = handleAction(
	constants.SUBMIT_FORM,
	setValueReducer,
	defaultState,
)
