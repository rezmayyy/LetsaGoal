import SHA256 from 'crypto-js/sha256';
import { v4 as uuidv4 } from 'uuid';

function TestPage() {
    const username = "myUsername";
    const salt = uuidv4();
    const saltedUsername = username.trim().toLowerCase() + salt;
    const hashedUsername = SHA256(saltedUsername.trim().toLowerCase()).toString();
    const secretKey = process.env.REACT_APP_SYMMETRIC_KEY1;

    return (
        <div>
            <h1>{username}</h1>
        </div>
    )
}

export default TestPage;