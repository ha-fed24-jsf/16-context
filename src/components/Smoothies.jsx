import { useReducer } from "react"
import { smoothieReducer } from "../data/smoothieReducer"
import { smoothies as initialData } from '../data/testData.js'


const Smoothies = () => {
	const [smoothies, dispatch] = useReducer(smoothieReducer, initialData)

	return (
		<div className="smoothie-list">
			{smoothies.map(smoothie => (
				<div key={smoothie.id} className="smoothie-item">
					<h2> {smoothie.name} </h2>
					<p> {smoothie.price}€ </p>
					<div className="button-row">
						<button onClick={() => dispatch({ type: 'öka pris', id: smoothie.id, amount: 1 })}> Dyrare </button>
						<button onClick={() => dispatch({ type: 'klona', id: smoothie.id })}> Klona </button>
						<button onClick={() => dispatch({ type: 'ta bort', id: smoothie.id })}> Ta bort </button>
					</div>
				</div>
			))}

			{/* <div className="smoothie-item">
				<h2> Smoothie 2 </h2>
				<p> 5.5€ </p>
				<div className="button-row">
					<button> Dyrare </button>
					<button> Klona </button>
					<button> Ta bort </button>
				</div>
			</div> */}
		</div>
	)
}

export default Smoothies
