import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import LoginPage from './LoginPage';
import AdminLoginPage from './AdminLoginPage';
import '../App.css'; 

const Login = () => {
  const [selectedOption, setSelectedOption] = useState('student');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Router>
      <div className="container">
        <div className="option-buttons">
          <button
            className={`option-button ${selectedOption === 'student' ? 'active' : ''}`}
            onClick={() => handleOptionChange('student')}
          >
            Student Login
          </button>
          <button
            className={`option-button ${selectedOption === 'admin' ? 'active' : ''}`}
            onClick={() => handleOptionChange('admin')}
          >
            Admin Login
          </button>
        </div>
        <div className="login-bar">
          {selectedOption === 'student' ? <LoginPage /> : <AdminLoginPage />}
        </div>
      </div>
    </Router>
  );
};

export default Login;