import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../App.css'; 

const RegisterPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedFloor, setSelectedFloor] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  
const handleSubmit = (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

//   const registerData = {
//     userId,
//     password,
//     block: selectedBlock,
//     floor: selectedFloor,
//     room: selectedRoom
//   };

  // Perform register logic with registerData
  // For example, send a request to the server or update the state

  alert(`Registration Successful!\nUser ID: ${userId}\nBlock: ${selectedBlock}\nFloor: ${selectedFloor}\nRoom: ${selectedRoom}`);

  // Clear the form fields after successful registration
  setUserId('');
  setPassword('');
  setConfirmPassword('');
  setSelectedBlock('');
  setSelectedFloor('');
  setSelectedRoom('');
};

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleBlockChange = (e) => {
    setSelectedBlock(e.target.value);
  };

  const handleFloorChange = (e) => {
    setSelectedFloor(e.target.value);
  };

  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="register-form p-4 border rounded">
        <h1 className="text-center mb-4 heading heading">Student Registration</h1>
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

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBlock">
            <Form.Label>Block</Form.Label>
            <Form.Control as="select" value={selectedBlock} onChange={handleBlockChange}>
              <option value="">Select Block</option>
              <option value="A">Academic Block 1</option>
              <option value="B">Academic Block 2</option>
              <option value="C">Academic Block 3</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFloor">
            <Form.Label>Floor</Form.Label>
            <Form.Control as="select" value={selectedFloor} onChange={handleFloorChange}>
              <option value="">Select Floor</option>
              <option value="1">Ground</option>
              <option value="1">Floor 1</option>
              <option value="2">Floor 2</option>
              <option value="3">Floor 3</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRoom">
            <Form.Label>Room No</Form.Label>
            <Form.Control as="select" value={selectedRoom} onChange={handleRoomChange}>
              <option value="">Select Room No</option>
              <option value="1">Room 1</option>
              <option value="2">Room 2</option>
              <option value="3">Room 3</option>
              <option value="4">Room 4</option>
              <option value="5">Room 5</option>
              <option value="6">Room 6</option>
              <option value="7">Room 7</option>
              <option value="8">Room 8</option>
              <option value="9">Room 9</option>
              <option value="10">Room 10</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 register">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default RegisterPage;
