# Quiz-Web

Quiz-Web is an exciting web application built using cutting-edge technologies such as React, Node.js, Express.js, and MongoDB. It's your one-stop destination for creating and sharing quizzes with friends, family, and colleagues.

Please note that this project is still under active development, and we're constantly improving it to provide you with the best user experience.

## Features

- Create Quizzes: Craft your own unique quizzes with custom questions and answers.
- Share Quizzes: Share your created quizzes with others by simply sending them the link.

## API Endpoints

1. Create Quiz

   - Endpoint: /createQuiz
   - Method: POST
   - Description: Get the quiz data and receive a JSON response with a redirect parameter containing the URL to your newly created quiz.

2. Create Quiz Questions
   - Endpoint: /createQuiz/:id/questions
   - Method: POST
   - Description: Allows users to add questions to their quizzes and receive a redirect URL upon completion.

## Getting Started

Follow these steps to set up and run the Quiz-Web application on your local machine:

1. Clone this repository to your local environment.

   - `git clone https://github.com/sagnikMajumder89/Quiz-Web/quiz-web.git`

2. Install the necessary dependencies for both the client and server:

   - `cd quiz-web/client`
   - `npm install`
   - `cd ../server`
   - `npm install`

3. Start the client and server:

   - Start the server
     - `cd server`
     - `nodemon index.js`
   - Start the client
     - `cd client`
     - `npm start`

4. Access the Quiz-Web application in your web browser by visiting http://localhost:3000.

## Contributors

- Sagnik Majumder

## Feedback and Support

For any questions, feedback, or support, please feel free to create an issue on our GitHub repository.

We hope you enjoy Quiz-Web and have a fantastic time creating and sharing quizzes with your friends and colleagues!
