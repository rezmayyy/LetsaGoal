import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './frontend/components/context/authContext';
import Header from './frontend/components/header/header';
import LandingPage from './frontend/pages/landingPage';
import HomePage from './frontend/pages/homePage';
import SignUpPage from './frontend/pages/signUpPage';
import LogInPage from './frontend/pages/logInPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="login" element={<LogInPage />}></Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
