import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

// Check if user is logged in
const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/" />    // If user render children else '/'
}

export default ProtectedRoute;