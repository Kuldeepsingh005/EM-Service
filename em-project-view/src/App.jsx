import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';
import UpdateEmployee from './components/UpdateEmployee';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About'; // Import About
import { useState } from 'react';

const Logout = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  setLoggedIn(false);
  navigate('/login');
  return null;
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn} />} />
          <Route path="/about" element={<About />} /> {/* Add About route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;