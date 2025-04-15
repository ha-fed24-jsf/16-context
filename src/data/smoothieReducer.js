
// state är en lista med objekt
function smoothieReducer(state, action) {
	if( action.type === 'ta bort' ) {
		// vi behöver skicka med ett id för att veta vad som ska tas bort:
		// action: { type, id }
		return state.filter(smoothie => smoothie.id !== action.id )
	}

	else if( action.type === 'klona' ) {
		const original = state.find(smoothie => smoothie.id === action.id)
		return [ ...state, { ...original, id: crypto.randomUUID() } ]
	}

	else if( action.type === 'öka pris' ) {
		return state.map(smoothie => {
			if( smoothie.id === action.id ) {
				return { ...smoothie, price: smoothie.price + action.amount }
			} else {
				return smoothie
			}
		})
	}

	else {
		return state
	}
}
{/* <button onClick={() => dispatch({ type: 'öka pris', id: smoothie.id, amount: 1 })}> Dyrare </button>
<button onClick={() => dispatch({ type: 'klona', id: smoothie.id })}> Klona </button> */}
export { smoothieReducer }
