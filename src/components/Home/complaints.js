import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import EditForm from './EditForm';
import { baseUrl } from '../../shared/baseUrl';


function RenderComplaints({ item, handleShowImg }) {
  let statusColor;
  if (item.status === 'Unread') {
    statusColor = 'red';
  } else if (item.status === 'To Be Solved') {
    statusColor = 'yellow';
  } else if (item.status === 'Issue Solved') {
    statusColor = 'green';
  }

  return (
    <tr key={item.id} style={{ color: statusColor }}>
      {/* <td>{item.id.toString()}</td> */}
      <td>{(item.block +"  "+ item.floor + item.room).toString()}</td>
      <td>{item.type}</td>
      <td>{item.description}</td>
      <td>{item.date}</td>
      <td>{item.status}</td>
      <td>{item.statusdesc}</td>
      {/* <td>
      <button onClick={() => handleShowImg(item)} className="btn text-warning">
        <i style={{ color: "skyblue" }} className="bi bi-image"></i>
      </button>

      </td> */}
    </tr>
  );
}


export const FetchComplaints = ({ userid, handleShowImg }) => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetch(baseUrl + 'complaints')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((complaints) => {
        const sortedComplaints = complaints
          .filter((item) => item.userid === userid)
          .sort((a, b) => {
            // Sorting by status: Unread > To Be Solved > Issue Solved
            const statusOrder = {
              Unread: 0,
              'To Be Solved': 1,
              'Issue Solved': 2,
            };
            return statusOrder[a.status] - statusOrder[b.status];
          });
        setComplaints(sortedComplaints);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert(error);
      });
  }, [userid]);

  return (
    <>
      {complaints.map((item) => (
        <RenderComplaints
          key={item.id}
          item={item}
          handleShowImg={handleShowImg}
        />
      ))}
    </>
  );
};

const Complaints = ({id, room, floor, block}) => {
  const [showImg, setShowImg] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  
  const handleShowImg = (complaint) => {
    console.log("Complaint", complaint);
    setSelectedComplaint(complaint);
    setShowImg(true);
  };

  const handleCloseImg = () => setShowImg(false);

 

  return (
    <div>
      <section className='complaints w-100'>
        <div className='container'>
          <h3 className='text-center m-2 p-3'>Your Complaints</h3>
          <table className=' table table-sm m-2 mb-5 text-center table-responsive'>
            <thead className='bg-primary text-light'>
              <tr >
                {/* <th>ID</th> */}
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Class</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Complaint Type</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Description</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Publish Date</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Status</th>
                <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Status Description</th>
                {/* <th style={{ backgroundColor: '#eaeaea', color: '#333333' }}>Photo</th> */}
                {/* <th>Edit</th> */}
              </tr>
            </thead>
            <tbody>
              <FetchComplaints userid = {id} handleShowImg ={handleShowImg}/>
              
            </tbody>
          </table>
        </div>
      </section>
      <Modal show={showImg} onHide={handleCloseImg} className='d-block'>
        <Modal.Header toggle={handleShowImg} className='d-block' mycustomattribute="2">
          <Modal.Body>
          <img src={selectedComplaint && selectedComplaint.imgname ? `uploads/${selectedComplaint.imgname.substring(12)}` : ''} className='img-fluid p-4' alt='Complaint Image' />

          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleCloseImg}>Close</Button>
          </Modal.Footer>
        </Modal.Header>
      </Modal>
    </div>
  )
}

export default Complaints;
