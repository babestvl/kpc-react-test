import { handleAction } from 'redux-actions'
import constants from 'common/constants'
import { List, Map } from 'immutable'

const defaultState = List()

export const FormsReducer = handleAction(
	constants.SUBMIT_FORM,
	(state, action) => {
		if (action.error) {
			return state
		}
		const payload = action.payload
		console.log('state', state, 'payload', payload)
		return state.push(Map(payload))
	},
	defaultState,
)
