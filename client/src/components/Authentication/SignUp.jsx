import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const url = 'http://localhost:5000/auth/register';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            })
                .then((response) => {
                    if (response.status === 201) {
                    }
                    return response.json();
                    console.log(response.json());
                    // throw new Error('Registration failed');
                }
                )
                .then((data) => {
                    console.log(data);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    navigate('/');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
            <label className="text-gray-700 font-bold mb-2">
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </label>
            <br />
            <label className="text-gray-700 font-bold mb-2">
                Email:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </label>
            <br />
            <label className="text-gray-700 font-bold mb-2">
                Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </label>
            <br />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
        </form>
    );
}

export default SignUp;
