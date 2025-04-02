import { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/context/authContext';

function LogInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const { user } = useAuth();

    // Check if user is already logged in
    useEffect (() => {
        if (user) {
            navigate("/home")
        }
    }, [user, navigate]);

    // Handle Log in 
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow-sm">
                        <h2 className="text-center">Login</h2>

                        {error && <div className="alert alert-danger">{error}</div>}

                        <form onSubmit={handleLogin}>
                            {/* email input  */}
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    require
                                />
                            </div>

                            {/* password input */}
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input 
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogInPage;