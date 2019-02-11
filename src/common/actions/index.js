import { createAction } from 'redux-actions'
import constants from 'common/constants'

const actions = {
	submitForm: createAction(constants.SUBMIT_FORM),
}

export default actions
