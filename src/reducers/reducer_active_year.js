// State arg is not application state, just the state
// this reducer is responsible for
export default function(state = null, action) {
	switch(action.type) {
		case "YEAR_SELECTED":
			return action.payload;
	} 
	return state;
}