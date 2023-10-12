import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { LoginContext } from '../contexts/'

const ProtectedRoute = ({ children }) => {
    const redirectTo = '/login'
    const { isLogged } = useContext(LoginContext)

    if (!isLogged) {
        return <Navigate to={redirectTo} />
    }
    return children ? children : <Outlet />
}

export default ProtectedRoute