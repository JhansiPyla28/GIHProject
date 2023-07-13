import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import EditForm from './EditForm';
import { baseUrl } from '../../shared/baseUrl';
import AdminNav from './TechAdminNav';
import Footer from '../Footer/Footer';
import MainAdminNav from './MainAdminNav';

function RenderComplaints({ item, handleShow ,handleShowImg}) {
  let statusColor;
  if (item.status === 'Unread') {
    statusColor = 'text-danger'; // Red color for unread complaints
  } else if (item.status === 'To Be Solved') {
    statusColor = 'text-warning'; // Yellow color for to be solved complaints
  } else if (item.status === 'Issue Solved') {
    statusColor = 'text-success'; // Green color for issue solved complaints
  }
  if(item.type == "Civil"){
    return (
      <tr key={item.id} className={statusColor}>
        <td>{item.userid.toString()}</td>
      <td>{`${item.block} ${item.floor}${item.room}`}</td>
      <td>{item.type}</td>
      <td> {item.subType}</td>
      <td>{item.description}</td>
      <td>{item.date.substring(0,10)}</td>
      <td>{item.phoneNumber}</td>
      <td>{item.status}</td>
      <td>{item.statusdesc}</td>
        
        <td>
          <button onClick={() => handleShow(item)} className="btn text-warning">
            <i className="bi bi-pen">edit</i>
          </button>
        </td>
        {/* <td>
        <button onClick={() => handleShowImg()} className="btn text-warning">
          <i style={{ color: "skyblue" }} className="bi bi-image"></i>
        </button>
  
        </td> */}
      </tr>
    );
  }
}


export const FetchComplaints = ({ userid, handleShow, handleShowImg }) => {
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
  
  const sortedComplaints = [...complaints].sort((a, b) => {
    if (a.status === 'Unread') {
      return -1;
    } else if (a.status === 'To Be Solved' && b.status !== 'Unread') {
      return -1;
    } else if (a.status === 'Issue Solved' && b.status !== 'Unread' && b.status !== 'To Be Solved') {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <>
      {sortedComplaints.map(item => (
        <RenderComplaints key={item.id} item={item} handleShow={handleShow} handleShowImg={handleShowImg} />
      ))}
    </>
  );
};


const CivilComplaints = ({id, room, floor, block}) => {
  const [show, setShow] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showImg,setShowImg]=useState(false);

  const handleShowImg = (complaint) => {
    setSelectedComplaint(complaint);
    console.log(complaint);
    setShowImg(true);
  };

  const handleCloseImg = () => setShowImg(false);

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
      <MainAdminNav/>
      <section className='complaints w-100' style={{ minHeight: '500px' }}>
        <div className='container'>
          <h3 className='text-center m-2 p-3'>Civil Complaints</h3>
          <table className=' table table-sm m-2 mb-5 text-center table-responsive'>
            <thead>
              <tr >
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}> UserId</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Class</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Complaint Type</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}> Sub Type</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Description</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Publish Date</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Phone number</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Status</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Status Description</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Edit</th>
                {/* <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Photo</th> */}
              </tr>
            </thead>
            <tbody>
              <FetchComplaints userid = {id} handleShow ={handleShow} handleShowImg ={handleShowImg}/>
              
              {/* {records.map((record, i) => (
                <tr key={i}>
                  <td>{record.id}</td>
                  <td>{record.complaint}</td>
                  <td>{record.type}</td>
                  <td>{record.description}</td>
                  <td>{record.publish}</td>
                  <td>{record.status}</td>
                  <td>{record.statusdesc}</td>
                  <td>
                    <button onClick={() => handleShow(record)} className='btn text-warning'><i className='bi bi-pen'></i></button>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </section>
      <Modal show={show} onHide={handleClose} className='d-block'>
        <Modal.Header toggle={handleShow} close={closeButton} className='d-block' mycustomattribute="2">
          <Modal.Title className='text-center'>
            Edit Complaints
          </Modal.Title>
          <Modal.Body>
            {selectedComplaint && <EditForm complaint={selectedComplaint} />}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal.Header>
      </Modal>

      <Modal show={showImg} onHide={handleCloseImg} className='d-block'>
        <Modal.Header toggle={handleShowImg} className='d-block' mycustomattribute="2">
  
          <Modal.Body>
              <img src='/rgukt.jpeg' className='img-fluid p-4'/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleCloseImg}>Close</Button>
          </Modal.Footer>
        </Modal.Header>
      </Modal>
      <Footer/>
    </div>
  )
}

export default CivilComplaints;
