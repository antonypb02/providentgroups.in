import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NursingCollegesPage from './pages/NursingCollegesPage';
import EngineeringCollegesPage from './pages/EngineeringCollegesPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nursing-colleges" element={<NursingCollegesPage />} />
        <Route path="/engineering-colleges" element={<EngineeringCollegesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
