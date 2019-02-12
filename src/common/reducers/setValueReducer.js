import { Map } from 'immutable'
import Storage from 'client/Storage'

export default (state, action) => {
	if (action.error) {
		return state
	}
	const payload = action.payload
	const index = state.findIndex(item => payload.Uid === item.get('Uid'))
	let newState
	if (index !== -1) {
		newState = state.set(index, Map(payload))
	}
	newState = state.push(Map(payload))
	Storage.storeData(newState)
	return newState
}
