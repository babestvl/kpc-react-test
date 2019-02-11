import { Map } from 'immutable'

export default (state, action) => {
	if (action.error) {
		return state
	}
	const payload = action.payload
	const index = state.findIndex(item => payload.Uid === item.get('Uid'))
	if (index !== -1) {
		return state.set(index, Map(payload))
	}
	return state.push(Map(payload))
}
