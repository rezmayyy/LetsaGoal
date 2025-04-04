import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './frontend/components/context/authContext';
import Header from './frontend/components/header/header';
import LandingPage from './frontend/pages/landingPage';
import HomePage from './frontend/pages/homePage';
import SignUpPage from './frontend/pages/signUpPage';
import LogInPage from './frontend/pages/logInPage';
import ProtectedRoute from './frontend/components/routes/protectedRoute';
import TestPage from './frontend/pages/testPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          {/* Public Routes */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/test" element={<TestPage />} />

            {/* Protected Routes  */}
            <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
