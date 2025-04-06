import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';
import SHA256 from 'crypto-js/sha256';
import { v4 as uuidv4 } from 'uuid';

function SignUpPage() {
    const [username, setUsername] = useState('');
    const salt = uuidv4();
    const symmetricKey1 = process.env.REACT_APP_SYMMETRIC_KEY1;
    const symmetricKey2 = process.env.REACT_APP_SYMMETRIC_KEY2;
    const hashedUsernameAndKey = SHA256(username.trim().toLowerCase() + symmetricKey1).toString();
    const hashedUsernameAndKeyAndSalt = SHA256(username.trim().toLowerCase() + symmetricKey2 + salt).toString();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Check if user is logged in and redirect them to home if they are
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/home');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Handle Signup. function handleSignUp(e) { ... } creates user and store info in firestore
    const handleSignUp = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!")
            return;
        }

        try {
            const usernameTrimmed = username.trim().toLowerCase();
            const usernameRef = doc(db, "usernames", usernameTrimmed);
            const usernameSnap = await getDoc(usernameRef);

            // Check if username already exists
            if (usernameSnap.exists()) {
                setError("Username already taken! Please choose another.");
                return;
            }

            // Create account with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await user.getIdToken(true);

            // Ensure user is authenticated by waiting for `onAuthStateChanged`
            await new Promise((resolve) => {
                const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
                    if (firebaseUser && firebaseUser.uid === user.uid) {
                        resolve();
                        unsubscribe();
                    }
                });
            });

            // Store user data in Firestore 'users' collection
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email.trim(),
                username: username.trim(),
                usernameLower: username.trim().toLowerCase(),
                createdAt: new Date()
            });

            // Store username in Firestore 'usernames' collection
            await setDoc(usernameRef, {
                uid: user.uid
            });

            // Store salt value in 'hashedUsernamesAndKey' collection
            await setDoc(doc(db, "hashedUsernamesAndKey", hashedUsernameAndKey), {
                salt: salt,
            });

            // Store email in 'hashedUsernamesAndKeyAndSalt' collection
            await setDoc(doc(db, "hashedUsernamesAndKeyAndSalt", hashedUsernameAndKeyAndSalt), {
                email: user.email.trim()
            });
            
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow-sm">
                        <h2 className="text-center">Sign Up</h2>

                        {error && <div className="alert alert-danger">{error}</div>}

                        <form onSubmit={handleSignUp}>

                            {/* username input */}
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>

                            {/* email input  */}
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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

                            {/* confirm password input */}
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;