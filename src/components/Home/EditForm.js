import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { baseUrl } from '../../shared/baseUrl';
import { useNavigate } from 'react-router-dom';

const EditForm = ({ complaint }) => {

  const navigate = useNavigate();
  const [block,setBlock] = useState(complaint.block);
  const [floor, setFloor] = useState(complaint.floor);
  const [room, setRoom] = useState(complaint.room);
  const [date,setDate] = useState(complaint.date);
  const [type, setType] = useState(complaint.type);
  const [subType, setSubType]=useState(complaint.subType);
  const [statusdesc, setStatusdesc] = useState(complaint.statusdesc);
  const [status, setStatus] = useState(complaint.status);
  const [description,setDescription] = useState(complaint.description);
  const [userid, setUserid] = useState(complaint.userid);
  const [phoneNumber,setPhoneNumber] = useState(complaint.phoneNumber)
  const [imgname,setImgname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const formData = new FormData();
  formData.append('file', e.target.photo.files[0]);

  // Make a request to upload the file
  try {
    const response =  fetch('http://localhost:3002/upload', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const { filename } =  response.json();
      setImgname(filename);
      console.log(filename);
    } else {
      console.error('File upload failed.');
    }
  } catch (error) {
    console.error('Error occurred during file upload:', error);
  }



    fetch(baseUrl+`complaints/${complaint.id}`, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify( {block,room,floor,type, description,userid,date,status, statusdesc, imgname,subType,phoneNumber})
    });
    // console.log(description, status);
    // navigate('/admin-complaints');
    window.location.reload(false)
};

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="id">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="text"
          value={complaint.id}
          disabled
        />
      </Form.Group>
      {/* <Form.Group controlId="complaintType">
        <Form.Label>Type of Complaint:</Form.Label>
        <Form.Control
          as="select"
          value={complaintType}
          onChange={(event) => setComplaintType(event.target.value)}
        >
          <option value="">Select complaint type</option>
          <option value="lan problem">LAN</option>
          <option value="Projector">Projector</option>
          <option value="Charging Port">Charging Port</option>
        </Form.Control>
      </Form.Group> */}
      <br />
      <Form.Group controlId="status">
        <Form.Label>Status:</Form.Label>
        <Form.Control
          as="select"
          value={status}
          onChange={(event) => {setStatus(event.target.value);}}
          placeholder='Select complaint type'
        >
          {/* <option value="">Select complaint type</option> */}
          
          <option value="Unread">Unread</option>
          <option value="To Be Solved">To Be Solved</option>
          <option value="Issue Solved">Issue Solved</option>
        </Form.Control>
      </Form.Group>
      <br />
      <Form.Group controlId="description">
        <Form.Label>Status Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={statusdesc}
          onChange={(event) => setStatusdesc(event.target.value)}
        />
      </Form.Group>
      <br></br>
      {/* <Form.Group controlId="photo">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control
          type="file"
          value={imgname}
          onChange={(event) =>{ console.log(event.target.value.substring(12));setImgname(event.target.value)}}
        />
      </Form.Group> */}
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default EditForm;
