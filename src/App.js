//
import { Routes, Route, Navigate, Router } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Property from "./components/Property/Property";
import Details from "./components/PropertyDetails/Details";


function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Property" element={<Property />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      
    </>
  );
}

export default App;
