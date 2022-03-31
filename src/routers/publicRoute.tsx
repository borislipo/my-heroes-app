import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/authContext"

interface PrivateRouteProps {
    children: JSX.Element
}

export const PublicRoute = ({ children }: PrivateRouteProps) => {

    const { authState } = useContext(AuthContext)

    return authState.logged ? <Navigate to="/marvel" /> : children

}