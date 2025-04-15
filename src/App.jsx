
import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Header from './components/Header'
import { UserContext } from './data/userContext.jsx'
import Framed from './components/Framed.jsx'
import Smoothies from './components/Smoothies.jsx'

function App() {
	const [user, setUser] = useState({ status: 'utloggad' })
	const box = { user: user, setUser: setUser }

	return (
		<UserContext.Provider value={box}>
		<div className="app">
			<Framed>
				<Header />
			</Framed>
			<main>
				<Framed>
					<Greeting />
				</Framed>

				<Smoothies />
			</main>
		</div>
		</UserContext.Provider>
	)
}

export default App
