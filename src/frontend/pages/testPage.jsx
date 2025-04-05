import SHA256 from 'crypto-js/sha256';
import { v4 as uuidv4 } from 'uuid';

function TestPage() {
    const username = "myUsername";
    const salt = uuidv4();
    const saltedUsername = username.trim().toLowerCase() + salt;
    const hashedUsername = SHA256(saltedUsername.trim().toLowerCase()).toString();

    return (
        <div>
            <h1>Hello, Test Page!</h1>
            <h1>{username}</h1>
            <h1>{salt}</h1>
            <h1>{saltedUsername}</h1>
            <h1>{hashedUsername}</h1>
        </div>
    )
}

export default TestPage;