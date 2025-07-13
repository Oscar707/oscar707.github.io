import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from "./components/Header"
import Hero from "./components/Hero"
import Education from './components/Education'
import Project from './components/Project'
import Articles from './components/Articles'
import ArticlesIterations from './components/ArticlesIterations'

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
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/iterations" element={<ArticlesIterations />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App