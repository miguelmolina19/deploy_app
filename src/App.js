import './App.css';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signin from './pages/signin';
import Home from './pages/index';
import React from 'react';


function App() {
  return (
    <Router>   
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<Signin />} exact />
      </Routes>
    </Router>
  );
}

export default App;
