import Storage from 'client/Storage'

export default (state, action) => {
	if (action.error) {
		return state
	}
	const payload = action.payload
	const index = state.findIndex(item => payload === item.get('Uid'))
	const newState = state.delete(index)
	Storage.storeData(newState)
	return newState
}
