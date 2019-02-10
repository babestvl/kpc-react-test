import { handleActions } from 'redux-actions'

const valueReducer = (state, action) => {
	const payload = action.payload
	return payload || null
}

export default name => {
	const reducer = {}
	reducer[`SET_${name}`] = valueReducer
	reducer[`CLEAR_${name}`] = () => ''

	const extendedReducer = Object.assign({}, reducer)
	return handleActions(extendedReducer, '')
}
