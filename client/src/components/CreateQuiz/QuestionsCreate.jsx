
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function QuestionsCreate() {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);

    const addQuestion = () => {
        setQuestions([...questions, { question: "", typeQ: "mcq", options: [], correctAnswer: null }]);
    };

    const updateQuestion = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    const updateOption = (questionIndex, optionIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(updatedQuestions);
    };

    const updateCorrectAnswer = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].correctAnswer = optionIndex;
        setQuestions(updatedQuestions);
    };

    const handleSubmitQuestions = () => {
        fetch(`http://localhost:5000/createQuiz/${id}/questions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(questions),
        })
            .then((res) => (window.location.href = res.url));
    };

    return (
        <div className="text-black p-4 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4 flex justify-center">Create your questions</h1>
            {questions.map((question, index) => (
                <div key={index} className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-2">Question {index + 1}</h3>
                    <label className="block mb-2">
                        Question:
                        <input
                            type="text"
                            value={question.question}
                            onChange={(e) => updateQuestion(index, "question", e.target.value)}
                            className="block w-full rounded-md border-gray-300 bg-white text-gray-900 py-2 px-3 mt-1 mb-2"
                        />
                    </label>
                    <br />
                    <label className="block mb-2">
                        Image:
                        <input type="file" />
                    </label>
                    <br />
                    <label className="block mb-2">
                        Type:
                        <label className="inline-flex items-center ml-2">
                            <input
                                type="radio"
                                value="subjective"
                                checked={question.typeQ === "subjective"}
                                onChange={(e) => updateQuestion(index, "typeQ", e.target.value)}
                                className="form-radio h-5 w-5 text-gray-600"
                            />
                            <span className="ml-2 text-black">Subjective</span>
                        </label>
                        <label className="inline-flex items-center ml-2">
                            <input
                                type="radio"
                                value="mcq"
                                checked={question.typeQ === "mcq"}
                                onChange={(e) => updateQuestion(index, "typeQ", e.target.value)}
                                className="form-radio h-5 w-5 text-gray-600"
                            />
                            <span className="ml-2 text-black">MCQ</span>
                        </label>
                    </label>
                    {question.typeQ === "mcq" && (
                        <div>
                            <label className="block mb-2">
                                Option 1:
                                <input
                                    type="text"
                                    value={question.options[0] || ""}
                                    onChange={(e) => updateOption(index, 0, e.target.value)}
                                    className="block w-full rounded-md border-gray-300 bg-white text-gray-900 py-2 px-3 mt-1 mb-2"
                                />
                                <input
                                    type="radio"
                                    checked={question.correctAnswer === 0}
                                    onChange={() => updateCorrectAnswer(index, 0)}
                                    className="ml-2"
                                />
                            </label>
                            <br />
                            <label className="block mb-2">
                                Option 2:
                                <input
                                    type="text"
                                    value={question.options[1] || ""}
                                    onChange={(e) => updateOption(index, 1, e.target.value)}
                                    className="block w-full rounded-md border-gray-300 bg-white text-gray-900 py-2 px-3 mt-1 mb-2"
                                />
                                <input
                                    type="radio"
                                    checked={question.correctAnswer === 1}
                                    onChange={() => updateCorrectAnswer(index, 1)}
                                    className="ml-2"
                                />
                            </label>
                            <br />
                            <label className="block mb-2">
                                Option 3:
                                <input
                                    type="text"
                                    value={question.options[2] || ""}
                                    onChange={(e) => updateOption(index, 2, e.target.value)}
                                    className="block w-full rounded-md border-gray-300 bg-white text-gray-900 py-2 px-3 mt-1 mb-2"
                                />
                                <input
                                    type="radio"
                                    checked={question.correctAnswer === 2}
                                    onChange={() => updateCorrectAnswer(index, 2)}
                                    className="ml-2"
                                />
                            </label>
                            <br />
                            <label className="block mb-2">
                                Option 4:
                                <input
                                    type="text"
                                    value={question.options[3] || ""}
                                    onChange={(e) => updateOption(index, 3, e.target.value)}
                                    className="block w-full rounded-md border-gray-300 bg-white text-gray-900 py-2 px-3 mt-1 mb-2"
                                />
                                <input
                                    type="radio"
                                    checked={question.correctAnswer === 3}
                                    onChange={() => updateCorrectAnswer(index, 3)}
                                    className="ml-2"
                                />
                            </label>
                            <br />
                        </div>
                    )}
                </div>
            ))}
            <div className="flex justify-center">
                <button onClick={addQuestion} className="text-orange-700 py-2 px-4 rounded-md hover:hover:bg-gray-100 hover:font-bold w-2/12">
                    Add question
                </button>
            </div>
            <button onClick={handleSubmitQuestions} className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-500 hover:font-bold w-2/12">
                Submit
            </button>
        </div>
    );
}