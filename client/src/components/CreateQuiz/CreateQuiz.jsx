import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const intializeQuizData = () => {
    return { 'name': '', 'description': '', 'duration': 10, 'date': '', 'time': '' };
}

export default function CreateQuiz() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/auth/login', { state: { from: location.pathname, flashMessage: 'Please login to continue' } });
        }
    }, [])

    const [quiz, setQuiz] = useState(intializeQuizData);

    const handleNameChange = (event) => {
        setQuiz({ ...quiz, name: event.target.value });
    }

    const handleDescriptionChange = (event) => {
        setQuiz({ ...quiz, description: event.target.value });
    }


    const handleDurationChange = (event) => {
        setQuiz({ ...quiz, duration: event.target.value });
    }

    const handleDateChange = (event) => {
        setQuiz({ ...quiz, date: event.target.value });
    }

    const handleTimeChange = (event) => {
        setQuiz({ ...quiz, time: event.target.value });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:5000/createQuiz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(quiz),
        });

        if (response.ok) {
            const { redirect } = await response.json();
            window.location.href = redirect; // Redirect to the URL returned by the server
        } else {
            console.error('Failed to create quiz');
        }
    }
    return (<>
        <form action="/createQuiz" method='POST'>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold mb-4">Create Quiz</h1>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="quizName">Quiz Name</label>
                        <input
                            type="text"
                            placeholder="Enter quiz name"
                            value={quiz.name}
                            onChange={handleNameChange}
                            className="border border-gray-400 rounded py-2 px-4"
                        />
                    </div>
                    <div className="flex flex-col space-y-1 w-96">
                        <label htmlFor="quizDescription">Quiz Description</label>
                        <input
                            type="text"
                            placeholder="Enter quiz description"
                            value={quiz.description}
                            onChange={handleDescriptionChange}
                            className="border border-gray-400 rounded py-2 px-4"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="quizDuration">Quiz Duration (in mins)</label>
                        <input
                            type="number"
                            placeholder="Enter quiz duration"
                            value={quiz.duration}
                            onChange={handleDurationChange}
                            className="border border-gray-400 rounded py-2 px-4"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="quizDate">Quiz Date</label>
                        <input
                            type="date"
                            placeholder="Enter quiz date"
                            value={quiz.date}
                            onChange={handleDateChange}
                            className="border border-gray-400 rounded py-2 px-4"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="quizTime">Quiz Time</label>
                        <input
                            type="time"
                            placeholder="Enter quiz time"
                            value={quiz.time}
                            onChange={handleTimeChange}
                            className="border border-gray-400 rounded py-2 px-4" />
                    </div>
                    <button className='bg-orange-500 text-white py-2 px-4 rounded p-4' onClick={handleFormSubmit}>Create</button>
                </div>
            </div>

        </form>
    </>)
}