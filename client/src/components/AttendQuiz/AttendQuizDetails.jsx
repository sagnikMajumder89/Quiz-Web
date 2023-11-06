import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


function AttendQuizDetails() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [quizDetails, setQuizDetails] = useState(null);
    const quizDetailsFetch = () => {
        fetch(`http://localhost:5000/attendQuiz/getQuiz/${id}`)
            .then(response => response.json())
            .then(data => { setQuizDetails(data); setLoading(false); })
            .catch(error => console.log(error));
    }
    useEffect(() => {
        quizDetailsFetch();
    }, []);
    return (
        <div className="bg-orange-700 text-white p-4 rounded-lg">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1 className="text-3xl font-bold mb-4">{quizDetails.name}</h1>
                    <p className="text-lg mb-2">{quizDetails.description}</p>
                    <p className="text-lg mb-2">Duration: {quizDetails.duration}</p>
                    <p className="text-lg mb-4">Number of Questions: {quizDetails.questions.length}</p>
                    <Link to={`/attendQuiz/${id}/view`} className="bg-white text-orange-700 py-2 px-4 rounded-lg">Attend Quiz</Link>
                </>
            )}
        </div>
    );
}

export default AttendQuizDetails;
