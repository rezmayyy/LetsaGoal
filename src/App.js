import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './frontend/components/header/header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <h1>Hello, App.js!</h1>
      </div>
    </Router>
  );
}

export default App;
