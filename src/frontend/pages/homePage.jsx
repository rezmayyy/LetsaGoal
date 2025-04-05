import React from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

function HomePage() {
    const testWriteToUsernames = async () => {
        const user = auth.currentUser;

        if (!user) {
            console.error("No authenticated user found!");
            alert("You must be signed in to test this.");
            return;
        }

        try {
            const testUsername = "testuser"; // Example username
            const usernameRef = doc(db, "usernames", testUsername);
            await setDoc(usernameRef, { uid: user.uid });
            console.log("Successfully wrote to usernames collection!");
            alert("Write succeeded!");
        } catch (error) {
            console.error("Error writing to usernames collection:", error);
            alert(`Write failed! Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={testWriteToUsernames}>Test Writing to Usernames</button>
        </div>
    );
}

export default HomePage;