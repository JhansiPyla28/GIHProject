import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import EditForm from './EditForm';
import { baseUrl } from '../../shared/baseUrl';
import { useNavigate,useLocation } from 'react-router-dom';
import AdminNav from './TechAdminNav';
import Footer from '../Footer/Footer';
import './Complaints.css'


function RenderComplaints({ item, handleShow }) {
  // const navigate=useNavigate()
  // useEffect(()=>{
  //   console.log(item.id)
  //   if(item.id===null){
  //     console.log("hi")
  //     navigate("/")
  //    }
  //   })
  return (
    <tr key={item.id}>
      <td>{item.id.toString()}</td>
      <td>{(item.block+"  " + item.floor+ item.room).toString()}</td>
      <td>{item.type}</td>
      <td>{item.subType}</td>
      <td>{item.description}</td>
      <td>{item.date}</td>
      <td>{item.status}</td>
      <td>{item.statusdesc}</td>
      </tr>
  );
}
export const FetchComplaints = ({ userid, handleShow }) => {
    const [complaints, setComplaints] = useState([]);
  
    useEffect(() => {
      fetch(baseUrl + 'complaints')
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          return response.json();
        })
        .then(complaints => {
          const filteredComplaints = complaints;
          setComplaints(filteredComplaints);
        })
        .catch(error => {
          console.error('Error:', error);
          alert(error);
        });
    }, [userid]);
    const revComplaints=[...complaints].reverse()
    return (
      <>
        {revComplaints.map(item => (
          <RenderComplaints key={item.id} item={item} handleShow={handleShow} />
        ))}
      </>
    );
  };
  
  
  const AllComplaints = () => {
    const [show, setShow] = useState(false);
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const location=useLocation()
    if(location.state===null){
      window.location.href='/'
    
     }
    console.log(location.state.id.userId)
    const id=location.state.id.userId
    
    const handleShow = (complaint) => {
      setSelectedComplaint(complaint);
      console.log(complaint);
      setShow(true);
    };
  
    
  
  
    const handleClose = () => setShow(false);
    const closeButton = (
      <button onClick={handleClose}>&times;</button>
    );


return (
    <div>
      <AdminNav/>
      <section className='complaints w-100'>
        <div className='container'>
          <h3 className='text-center m-2 p-3'>All Complaints</h3>
          <table className=' table table-sm m-2 mb-5 text-center table-responsive'>
          <thead>
            <tr>
              <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>User ID</th>
              <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Class</th>
              <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Complaint Type</th>
              <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Sub Type</th>
              <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Description</th>
              <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Publish Date</th>
              <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Status</th>
              <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Status Description</th>
            </tr>
          </thead>
            <tbody>
              <FetchComplaints userid = {id} handleShow ={handleShow}/>
              </tbody>
          </table>
        </div>
      </section>
      <Footer/>
      </div>
  )
}
export default AllComplaints