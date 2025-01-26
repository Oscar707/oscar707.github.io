import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from "./components/Header"
import Hero from "./components/Hero"
import Education from './components/Education'
import Project from './components/Project'
import Mbti from './components/Mbti'

function App() {
  return (
    <Router> 
      <div className="min-h-screen bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Education />
            </>
          } />
          <Route path="/projects" element={<Project />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App