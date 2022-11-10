import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from './components/Header';
import React from "react";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
//import { store } from "./app/store";
import NewTicket from "./pages/NewTicket";
import Tickets from "./pages/Tickets";


function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/new-ticket" element={<NewTicket />} />
            <Route path="/tickets" element={<Tickets />} />

          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
