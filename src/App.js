import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './frontend/components/header/header';
import LandingPage from './frontend/pages/landingPage';
import HomePage from './frontend/pages/homePage';
import SignUpPage from './frontend/pages/signUpPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
