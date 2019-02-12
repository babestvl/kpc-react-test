const selectors = {
	getForms: state => state.get('forms').toJS(),
	getShowData: state => state.get('showData').toJS(),
}

export default selectors
