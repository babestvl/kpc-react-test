import { fromJS } from 'immutable'

export default (state, action) => {
	if (action.error) {
		return state
	}
	const payload = action.payload
	return fromJS(payload) || null
}
