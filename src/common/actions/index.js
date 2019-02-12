import { createAction } from 'redux-actions'
import constants from 'common/constants'

const actions = {
	initStore: createAction(constants.INIT_STORE),
	submitForm: createAction(constants.SUBMIT_FORM),
}

export default actions
