import { Link } from 'react-router-dom';

function AfterSubmit() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-3xl font-bold mb-4">Quiz submitted successfully!</h2>

            <Link to="/" className="text-blue-500 hover:text-blue-700">Go to home page</Link>

        </div>
    )
}

export default AfterSubmit;


