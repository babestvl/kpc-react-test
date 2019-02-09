class Storage {
	store = {}

	init(store) {
		this.store = store
	}

	get(key, defaultValue = null) {
		return JSON.parse(localStorage.getItem(key, defaultValue))
	}

	set(key, action, data) {
		localStorage.setItem(key, JSON.stringify(data))
		this.store.dispatch(action(data))
	}
}

export default new Storage()
