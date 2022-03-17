import { Link, NavLink, useNavigate } from 'react-router-dom'

type isActiveProps = { isActive: boolean }

const isActive = ({ isActive }: isActiveProps) => isActive ? { fontWeight: 'bold' } : {}

export const NavBar = () => {

    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/login', { replace: true })
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        style={isActive}
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        style={isActive}
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        style={isActive}
                        className="nav-item nav-link"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        Boris Lipo
                    </span>
                    <NavLink
                        style={isActive}
                        className="nav-item nav-link"
                        to="/login"
                        onClick={handleLogout}
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}