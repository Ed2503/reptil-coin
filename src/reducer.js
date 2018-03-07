const reducer = (state, action) => {
	switch(action.type) {
		case 'API':
			let newState = {...state}
			newState.api.home = action.payload
			return newState
		break;
		case 'PANEL':
			let newState1 = {...state}
			newState1.data.panel = action.payload
			return newState1
		default:
			return state
	}
}

export default reducer