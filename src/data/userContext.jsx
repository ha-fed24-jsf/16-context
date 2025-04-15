import { createContext } from "react";

const UserContext = createContext({
	status: 'utloggad'  // eller 'inloggad'
	// name  om man är inloggad
})

export { UserContext }
