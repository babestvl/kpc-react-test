import actions from 'common/actions'

const key = 'kpc.data'

class Storage {
	store = {}

	init(store) {
		this.store = store
		// this.initData()
	}

	initData() {
		const data = JSON.parse(localStorage.getItem(key))
		console.log('initData', data)
		if (data) {
			this.store.dispatch(actions.submitForm(data))
		}
	}

	storeData(data) {
		console.log('storeData')
		localStorage.setItem(key, JSON.stringify(data))
	}
}

export default new Storage()
