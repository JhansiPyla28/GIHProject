import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './LoginRegister/LoginRegister.css';
import { baseUrl } from '../shared/baseUrl';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function ComplaintForm() {
  const navigate = useNavigate();
  let location = useLocation();
  location.state.id.userId = location.state.id.id;
  console.log(location.state.id.userId)
  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [year, setYear] = useState('');
  const [department, setDepartment] = useState('');
  const [complaintType, setComplaintType] = useState('');
  const [description, setDescription] = useState('');
  const [subType, setSubType] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [phoneNumber,setPhoneNumber] =useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    const newComplaint = {
      userid: location.state.id.id,
      Name: name,
      Email: email,
      block: location.state.block.block,
      floor: location.state.floor.floor,
      room: location.state.room.room,
      type: complaintType,
      subType: subType,
      description: description,
      status: "Unread",
      statusdesc: "Will be solved soon",
      phoneNumber: phoneNumber
    };
    newComplaint.date = new Date().toISOString();

    fetch(baseUrl + 'complaints', {
      method: "POST",
      body: JSON.stringify(newComplaint),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then(response => {
        if (response.ok) {
          alert("Complaint Posted");
          setName("");
          setComplaintType("");
          setDepartment("");
          setDescription("");
          setEmail("");
          setStudentClass("");
          setSubType("");
          setYear("");
          navigate("/Main_Home",{state:location.state})
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          alert(error);
        }
      })
      .catch(error => {
        alert(error);
      });
  };

  const handleComplaintTypeChange = (event) => {
    setComplaintType(event.target.value);
  };

  const renderComplaintOptions = () => {
    switch (complaintType) {
      case 'Technical':
        return (
          <Form.Group controlId="complaintSubType">
            <Form.Label>Complaint Sub-Type:</Form.Label>
            <Form.Control
              as="select"
              value={subType}
              onChange={(event) => setSubType(event.target.value)}
            >
              <option value="">Select complaint sub-type</option>
              <option value="LAN">LAN</option>
              <option value="Projector">Projector</option>
              <option value="Projector Cable">Projector Cable</option>
              
            </Form.Control>
          </Form.Group>
        );
      case 'Infra':
        return (
          <Form.Group controlId="complaintSubType">
            <Form.Label>Complaint Sub-Type:</Form.Label>
            <Form.Control
              as="select"
              value={subType}
              onChange={(event) => setSubType(event.target.value)}
            >
              <option value="">Select complaint sub-type</option>
              <option value="Charging Port">Charging Port</option>
              <option value="Fans">Fans</option>
              <option value="Lights">Lights</option>
              
            </Form.Control>
          </Form.Group>
        );
      case 'Civil':
        return (
          <Form.Group controlId="complaintSubType">
            <Form.Label>Complaint Sub-Type:</Form.Label>
            <Form.Control
              as="select"
              value={subType}
              onChange={(event) => setSubType(event.target.value)}
            >
              <option value="">Select complaint sub-type</option>
              <option value="Desks">Desks</option>
              <option value="Chairs">Chairs</option>
            </Form.Control>
          </Form.Group>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <Container className="d-flex flex-column justify-content-center align-items-center pb-5 ">
        <div className="complaint-form p-5 pt-4 border rounded">
          <div className='text-center pb-2'>
            {/* <img src='/logo.png' width="20" height="20"  /> */}
            {/* <span>IT Department RGUKT-NUZVID</span> */}
          </div>
          <div className="text-center mb-4 heading heading">
            <h4>Complaint Form</h4>
            <p>Please fill out this form with your complaint. We will review your request and follow up with you as soon as possible.</p>
          </div>

          <div className="cline"></div>

          {submitted && (
            <div className="alert alert-success mt-4" role="alert">
              Details submitted successfully!
            </div>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <br />

            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <br />

            <Form.Group controlId="class">
              <Form.Label>Class:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your class"
                value={studentClass}
                onChange={(event) => setStudentClass(event.target.value)}
              />
            </Form.Group>

            <br />

            <Form.Group controlId="year">
              <Form.Label>Year:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your year"
                value={year}
                onChange={(event) => setYear(event.target.value)}
              />
            </Form.Group>

            <br />

            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Phone number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </Form.Group>

            <br />

            <Form.Group controlId="department">
              <Form.Label>Department:</Form.Label>
              <Form.Control
                as="select"
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
              >
                <option value="">Select department</option>
                <option value="PUC">PUC</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="MECH">MECH</option>
                <option value="EEE">EEE</option>
                <option value="CHEM">CHEM</option>
                <option value="MME">MME</option>
              </Form.Control>
            </Form.Group>

            <br />

            <Form.Group controlId="complaintType">
              <Form.Label>Type of Complaint:</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Technical"
                  name="complaintType"
                  value="Technical"
                  checked={complaintType === 'Technical'}
                  onChange={handleComplaintTypeChange}
                />
                <Form.Check
                  type="radio"
                  label="Infra"
                  name="complaintType"
                  value="Infra"
                  checked={complaintType === 'Infra'}
                  onChange={handleComplaintTypeChange}
                />
                <Form.Check
                  type="radio"
                  label="Civil"
                  name="complaintType"
                  value="Civil"
                  checked={complaintType === 'Civil'}
                  onChange={handleComplaintTypeChange}
                />
              </div>
            </Form.Group>

            <br />

            {renderComplaintOptions()}

            <br />

            <Form.Group controlId="description">
              <Form.Label>Description of Complaint:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>

            <Button style={{ backgroundColor: '#eaeaea', color: '#333333' }} variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ComplaintForm;
