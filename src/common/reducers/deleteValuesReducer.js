import Storage from 'client/Storage'

export default (state, action) => {
	if (action.error) {
		return state
	}
	const payload = action.payload
	let newState = state
	payload.forEach(uid => {
		newState = newState.filter(item => item.get('Uid') !== uid)
	})
	Storage.storeData(newState)
	return newState
}
