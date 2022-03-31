import { useEffect, useReducer } from "react"
import { AppRouter } from "./routers/appRouter"
import { AuthContext } from "./auth/authContext"
import { authReducer } from "./auth/authReducer"
import { AuthState } from "./interfaces/interfaces"

const user = JSON.parse(localStorage.getItem('user') || '{}')

const initializer = (): AuthState => {
    return user || { logged: false }
}

export const HeroesApp = () => {

    const [authState, dispatch] = useReducer(authReducer, { name: null, logged: false }, initializer)

    useEffect(() => {
        if (!authState) return;
        localStorage.setItem('user', JSON.stringify(authState))

    }, [authState])

    return (
        <AuthContext.Provider value={{
            authState,
            dispatch
        }} >
            <AppRouter />
        </AuthContext.Provider>
    )
}   