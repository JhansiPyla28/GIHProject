import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; 

const AdminLoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User ID: ${userId}\nPassword: ${password}\nRemember Me: ${rememberMe ? 'Checked' : 'Unchecked'}`);
    setUserId('');
    setPassword('');
    setRememberMe(false);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 login-bar">
      <div className="login-form p-4 border rounded">
        <h1 className="text-center mb-4 heading">Admin Login</h1>
        <div className='line'></div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUserId">
            <Form.Label>User ID</Form.Label>
            <Form.Control type="text" placeholder="Enter your ID" value={userId} onChange={handleUserIdChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRememberMe">
            <Form.Check type="checkbox" label="Remember Me" checked={rememberMe} onChange={handleRememberMeChange} />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 login">
            Login
          </Button>

          <div>
            Not yet registered?{' '}
            <Link to="/register">Click here</Link>
          </div>

        </Form>
      </div>
    </Container>
  );
};

export default AdminLoginPage;
