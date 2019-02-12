import actions from 'common/actions'

const key = 'kpc.data'

class Storage {
	store = {}

	init(store) {
		this.store = store
		this.initData()
	}

	initData() {
		const data = JSON.parse(localStorage.getItem(key))
		if (data) {
			this.store.dispatch(actions.initStore(data))
		}
	}

	storeData(data) {
		localStorage.setItem(key, JSON.stringify(data))
	}
}

export default new Storage()
