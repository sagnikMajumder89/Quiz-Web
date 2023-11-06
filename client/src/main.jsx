import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import CreateQuiz from './components/CreateQuiz/CreateQuiz.jsx'
import QuestionsCreate from './components/CreateQuiz/QuestionsCreate.jsx'
import QuizCreatedFinalPage from './components/CreateQuiz/QuizCreatedFinalPage.jsx'
import AttendQuizDetails from './components/AttendQuiz/AttendQuizDetails.jsx'
import AttendQuiz from './components/AttendQuiz/AttendQuiz.jsx'
import ViewQuestions from './components/AttendQuiz/ViewQuestions.jsx'
import AfterSubmit from './components/AttendQuiz/AfterSubmit.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/createQuiz" element={<CreateQuiz />} />
        <Route path="/createQuiz/:id" element={<QuestionsCreate />} />
        <Route path="/createQuiz/:id/complete" element={<QuizCreatedFinalPage />} />
        <Route path="/attendQuiz" element={<AttendQuiz />} />
        <Route path="/attendQuiz/:id" element={<AttendQuizDetails />} />
        <Route path="/attendQuiz/:id/view" element={<ViewQuestions />} />
        <Route path="/attendQuiz/:id/complete" element={<AfterSubmit />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
