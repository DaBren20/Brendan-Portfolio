import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element={<HomePage />} />
          <Route path = "/about" element={<AboutPage />} />
          <Route path = "/projects" element={<ProjectsPage />} />
          <Route path = "/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
