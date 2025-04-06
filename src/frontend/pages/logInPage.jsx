import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useAuth } from '../components/context/authContext';
import SHA256 from 'crypto-js/sha256';

function LogInPage() {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const { user } = useAuth();
    const db = getFirestore();

    // Check if user is already logged in
    useEffect(() => {
        if (user) {
            navigate("/home")
        }
    }, [user, navigate]);

    // Handle Log in 
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('')

        let emailToUse = loginId.trim().toLowerCase();

        try {
            // If login info doesnt include '@', process username
            if (!emailToUse.includes('@')) {
                // User's username input being hashed with Key1 to find salt
                const username = loginId.trim().toLowerCase();
                const symmetricKey1 = process.env.REACT_APP_SYMMETRIC_KEY1;
                const symmetricKey2 = process.env.REACT_APP_SYMMETRIC_KEY2;
                const hashedUsernameAndKey = SHA256(username + symmetricKey1).toString();

                // Check if hashed username+key is a document in hashedUsernamesAndKey to find salt
                const saltDocRef = doc(db, "hashedUsernamesAndKey", hashedUsernameAndKey);
                const saltSnap = await getDoc(saltDocRef);
                if (!saltSnap.exists()) {
                    throw new Error("hashedUsernameAndKey not found");
                }
                
                // Get salt from hashedUsernamesAndKey collection
                const salt = saltSnap.data().salt;                

                // Recreate hashedUsernameAndKeyAndSalt using symmetricKey2 and salt we just got
                const hashedUsernameAndKeyAndSalt = SHA256(username + symmetricKey2 + salt).toString();

                // Get email 
                const emailDocRef = doc(db, "hashedUsernamesAndKeyAndSalt", hashedUsernameAndKeyAndSalt);
                const emailSnap = await getDoc(emailDocRef);
                if (!emailSnap.exists()) {
                    throw new Error("hashedUsernameAndKeyAndSalt not found");
                }
                emailToUse = emailSnap.data().email;
            }

            // Otherwise just sign in with email
            await signInWithEmailAndPassword(auth, emailToUse, password);
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
                            {/* username or email input  */}
                            <div className="mb-3">
                                <label className="form-label">Username or Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={loginId}
                                    onChange={(e) => setLoginId(e.target.value)}
                                    required
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