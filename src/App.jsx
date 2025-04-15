
import { useContext } from 'react'
import './App.css'
import { UserContext } from './data/userContext'

function App() {
	const user = useContext(UserContext)

	return (
		<div className="app">
			<header>
				<h1> Smoothies </h1>
				<div className="user">
					{user.status === 'utloggad'
					? 'Logga in!'
					: `Inloggad som ${user.name}.` }
				</div>
			</header>
			<main>

			</main>
		</div>
	)
}

export default App
