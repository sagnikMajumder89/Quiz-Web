
import { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
        const [username, setUsername] = useState('Sagnik');

        const handleUsernameChange = (event) => {
                setUsername(event.target.value);
        };

        return (
                <>
                        <div className="flex flex-col items-center justify-center h-screen">
                                <h1 className="text-3xl font-bold mb-4">Welcome, {username}!</h1>
                                <div className="flex space-x-4">
                                        <Link
                                                to="/createQuiz"
                                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                        >
                                                Create Quiz
                                        </Link>
                                        <Link
                                                to="/attendQuiz"
                                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                        >
                                                Attend Quiz
                                        </Link>
                                </div>
                                <div className="mt-4">
                                        <input
                                                type="text"
                                                placeholder="Enter your name"
                                                value={username}
                                                onChange={handleUsernameChange}
                                                className="border border-gray-400 rounded py-2 px-4"
                                        />
                                </div>
                        </div>
                </>
        );
}