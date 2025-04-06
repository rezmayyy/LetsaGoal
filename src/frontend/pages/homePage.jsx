import React from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from '../components/context/authContext';



function HomePage() {
    const { user, logout } = useAuth();



    return (
        <div>
            <h1>Home Page</h1>
            <h1>{user?.email || "No email available"}</h1>        
            <h1>In the works. 4/5/2025</h1>
        </div>
    );
}

export default HomePage;