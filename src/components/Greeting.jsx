import { useContext } from "react"
import { UserContext } from "../data/userContext"


const Greeting = () => {
	const context = useContext(UserContext)
	const user = context.user
	const setUser = context.setUser

	const handleLogin = () => {
		setUser({ ...user, status: 'inloggad', name: 'Karlsson' })
	}
	
	return (
		user.status === 'utloggad'
		? (<button onClick={handleLogin}> Logga in </button>)
		: (<p> Välkommen {user.name}!</p>)
	)
}

export default Greeting
