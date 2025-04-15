import { useContext } from "react"
import { UserContext } from "../data/userContext"


const Header = () => {
	const context = useContext(UserContext)
	const user = context.user
	return (
		<header>
		<h1> Smoothies </h1>
		<div className="user">
			{user.status === 'utloggad'
			? 'Logga in!'
			: `Inloggad som ${user.name}.` }
		</div>
		</header>
	)
}
export default Header
