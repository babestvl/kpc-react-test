import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux-immutable'
import { FormsReducer } from 'common/reducers'

const rootReducer = combineReducers({
	forms: FormsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
