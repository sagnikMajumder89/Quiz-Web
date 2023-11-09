
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const flashMessage = location.state?.flashMessage;
    const from = location.state?.from || '/';

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
                'auth-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                if (response.status === 201) return response.json();
                throw new Error('Login failed');

            })
            .then((data) => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div>
                <h2>You need to login</h2>
            </div>
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