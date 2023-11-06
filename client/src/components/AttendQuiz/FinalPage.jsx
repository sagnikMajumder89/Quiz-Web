

function FinalPage({ numAnswered, numQuestion, handleBack, handleSubmit }) {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">
                You answered {numAnswered} out of {numQuestion} questions
            </h1>
            <div className="flex space-x-4">
                <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit All
                </button>
                <button onClick={handleBack} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default FinalPage;

