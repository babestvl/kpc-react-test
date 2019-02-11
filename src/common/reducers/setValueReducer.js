import { Map } from 'immutable'

export default (state, action) => {
	if (action.error) {
		return state
	}
	const payload = action.payload
	console.log(state, payload)
	return state.push(Map(payload))
}
