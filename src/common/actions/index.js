import { createAction } from 'redux-actions'
import constants from 'common/constants'

const actions = {
	initStore: createAction(constants.INIT_STORE),
	submitForm: createAction(constants.SUBMIT_FORM),
	deleteForm: createAction(constants.DELETE_FORM),
	deleteForms: createAction(constants.DELETE_FORMS),
	setShowData: createAction(constants.SET_SHOW_DATA),
}

export default actions
