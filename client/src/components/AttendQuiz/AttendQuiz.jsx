

function AttendQuiz() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <h1 className="text-center text-3xl font-extrabold text-gray-900">Welcome to the Quiz!</h1>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Please enter the quiz code and passcode below <span className="text-gray-700 font-medium">or</span> paste the quiz link to join the quiz.
                </p>
                <div className="mt-6">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="quizCode" className="block text-sm font-medium text-gray-700">
                                Quiz Code
                            </label>
                            <div className="mt-1">
                                <input
                                    id="quizCode"
                                    name="quizCode"
                                    type="text"
                                    autoComplete="quizCode"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="passcode" className="block text-sm font-medium text-gray-700">
                                Passcode
                            </label>
                            <div className="mt-1">
                                <input
                                    id="passcode"
                                    name="passcode"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-center text-gray-500 text-sm font-medium mt-6">
                                OR
                            </h3>
                        </div>
                        <div>
                            <label htmlFor="quizLink" className="block text-sm font-medium text-gray-700">
                                Quiz Link
                            </label>
                            <div className="mt-1">
                                <input
                                    id="quizLink"
                                    name="quizLink"
                                    type="text"
                                    autoComplete="quizLink"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Join Quiz
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AttendQuiz;
