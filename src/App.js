import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './frontend/components/header/header';
import HomePage from './frontend/pages/homePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <h1>Hello, App.js!</h1>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          {/* <Route path="/home" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
