

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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

    const currentQuestion = questionList ? questionList[currentQuestionIndex] : ''

    return (
        loading ? <p className="text-center mt-4">Loading...</p> :
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
                <button onClick={handleNextClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" />
            </div>
    )
}

export default ViewQuestions
