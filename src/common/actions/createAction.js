import { createAction } from 'redux-actions'

export default name => {
	const actions = {
		set: createAction(`SET_${name}`),
		clear: createAction(`CLEAR_${name}`),
	}

	return actions
}
