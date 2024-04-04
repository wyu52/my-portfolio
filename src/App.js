import HomePage from './pages/homepage';
import Projects from './pages/projects';
import MovieSquirrel from './pages/moviesquirrel';
import Capstone from './pages/capstone';
import Portfolio from './pages/portfolio';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pages/projects" element={<Projects />}></Route>
        <Route path="/pages/moviesquirrel" element={<MovieSquirrel />}></Route>
        <Route path="/pages/capstone" element={<Capstone />}></Route>
        <Route path="/pages/portfolio" element={<Portfolio />}></Route>

      </Routes>
      </Router>
  )
}

export default App;
