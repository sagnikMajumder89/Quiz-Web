
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = 'http://localhost:5000/auth/login';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input className='h-9 m-4' type="email" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input className='h-9 m-4' type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login