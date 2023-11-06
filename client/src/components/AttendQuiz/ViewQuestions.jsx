

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FinalPage from './FinalPage';

function ViewQuestions() {
    const { id } = useParams()
    const questionsFetch = () => {
        fetch(`http://localhost:5000/attendQuiz/getQuiz/${id}`)
            .then(response => response.json())
            .then(data => { setQuestionList(data.questions); setLoading(false); })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        questionsFetch();
    }, []);

    const [questionList, setQuestionList] = useState(null)
    const [loading, setLoading] = useState(true)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [showFinalPage, setShowFinalPage] = useState(false)

    const handleSubjectiveAnswer = (event) => {
        const updatedAnswers = [...userAnswers]
        updatedAnswers[currentQuestionIndex] = event.target.value
        setUserAnswers(updatedAnswers)
    }

    const handleMcqAnswer = (event) => {
        const updatedAnswers = [...userAnswers]
        updatedAnswers[currentQuestionIndex] = event.target.value
        setUserAnswers(updatedAnswers)
    }

    const handleNextClick = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    const handleBackClick = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1)
    }

    const handleSubmitClick = () => {
        setShowFinalPage(true)
    }

    const handleGoBackClick = () => {
        setShowFinalPage(false)
    }

    const handleSubmitAll = () => {
        fetch(`http://localhost:5000/attendQuiz/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userAnswers),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                //get score data and show it
                window.location.replace(`http://localhost:3000/attendQuiz/${id}/complete`)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const currentQuestion = questionList ? questionList[currentQuestionIndex] : ''

    return (
        loading ? <p className="text-center mt-4">Loading...</p> :
            showFinalPage ? <FinalPage handleSubmit={handleSubmitAll} numAnswered={userAnswers.filter(answer => answer).length} numQuestion={questionList.length} handleBack={handleGoBackClick} /> :
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">{currentQuestion.question}</h2>
                    {currentQuestion.typeQ === 'mcq' && (
                        <div className="flex flex-col items-center">
                            {currentQuestion.options.map((option, index) => (
                                <div key={index} className="flex items-center mb-2">
                                    <input
                                        type="radio"
                                        name="mcq-option"
                                        value={option}
                                        checked={userAnswers[currentQuestionIndex] === option}
                                        onChange={handleMcqAnswer}
                                        className="mr-2"
                                    />
                                    <label className="text-lg">{option}</label>
                                </div>
                            ))}
                        </div>
                    )}
                    {currentQuestion.typeQ === 'subjective' && (
                        <div className="flex flex-col items-center">
                            <textarea
                                value={userAnswers[currentQuestionIndex] || ''}
                                onChange={handleSubjectiveAnswer}
                                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                            />
                        </div>
                    )}
                    {currentQuestionIndex != 0 && <button onClick={handleBackClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 my-2">Back</button>}
                    {currentQuestionIndex != questionList.length - 1 ? < button onClick={handleNextClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 my-2">Next</button>
                        : < button onClick={handleSubmitClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 my-2">Submit</button>
                    }
                </div >
    )
}

export default ViewQuestions
