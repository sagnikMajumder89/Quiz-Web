

import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

function QuizCreatedFinalPage() {

    const { id } = useParams();
    const [showDialog, setShowDialog] = useState(false);
    const quizLink = `http://localhost:3000/attendQuiz/${id}`;

    const handleShareClick = () => {
        setShowDialog(true);
    };

    const handleCloseClick = () => {
        setShowDialog(false);
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(quizLink);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-center text-orange-700 mb-8">Quiz Created Successfully!</h1>
            <div className="flex flex-col items-center justify-center space-y-4">
                <Link to="/" className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-800 transition-colors duration-300">Go to Home Page</Link>
                <button onClick={handleShareClick} className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-800 transition-colors duration-300">Share Quiz Link</button>
            </div>
            {showDialog && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md w-7/12">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-bold">Quiz Link</h2>
                            <button onClick={handleCloseClick} className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center space-x-6 w-full">
                            <input type="text" value={quizLink} readOnly className="flex-1 border-gray-300 rounded-md p-2 break-all" style={{ maxWidth: "100%" }} />
                            <button onClick={handleCopyClick} className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-800 transition-colors duration-300">Copy</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default QuizCreatedFinalPage