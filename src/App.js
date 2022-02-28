import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from './pages/Home';
import StockDetails from './pages/StockDetails';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stockdetails" element={<StockDetails />} />
        </Routes>
      </div> 
    </Router>
    <ToastContainer autoClose="1000" />
    </>
  );
}

export default App;
