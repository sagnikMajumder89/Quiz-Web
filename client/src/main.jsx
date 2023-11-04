import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import CreateQuiz from './components/CreateQuiz/CreateQuiz.jsx'
import QuestionsCreate from './components/CreateQuiz/QuestionsCreate.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//       path: "",
//       element: <Home/>
//     },
//     {
//       path: "about",
//       element: <About/>
//     }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/createQuiz" element={<CreateQuiz />} />
        <Route path="/createQuiz/:id" element={<QuestionsCreate />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
