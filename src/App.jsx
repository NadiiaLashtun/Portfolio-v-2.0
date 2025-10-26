import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';
import LandingPage from './components/pages/LandingPage';
import ProjectsPage from './components/pages/ProjectsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainLayout />}
        >
          <Route
            index
            element={<LandingPage />}
          />
          <Route
            path='projects'
            element={<ProjectsPage />}
          />
          <Route
            path='*'
            element={<h1>Not found</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
