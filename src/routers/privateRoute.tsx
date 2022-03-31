import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/authContext"

interface PrivateRouteProps {
    children: JSX.Element
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {

    const { authState } = useContext(AuthContext)

    return authState.logged ? children : <Navigate to="/login" />

}