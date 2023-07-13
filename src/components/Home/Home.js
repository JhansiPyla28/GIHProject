import React from 'react'
import './Home.css'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location=useLocation()
  if(location.state===null){
    window.location.href='/'
  }
  const records=[
    {
      id:1,
      complaint:'cse 1',
      type:'lan problem',
      description:'having lan problem',
      publish:'23-05-2023',
      status:'pending',
      statusdesc:'will be solved soon'
    },
    {
      id:2,
      complaint:'cse 2',
      type:'lan problem',
      description:'having lan problem',
      publish:'23-05-2023',
      status:'solved',
      statusdesc:'will be solved soon'
    },
    {
      id:3,
      complaint:'cse 2',
      type:'lan problem',
      description:'having lan problem',
      publish:'23-05-2023',
      status:'pending',
      statusdesc:'will be solved soon'
    },
  ]
  return (
    <div>
      {/* <div className='d-flex justify-content-center'>
        <div className='header justify-content-center p-5 '>
          <img src='/rgukt.jpeg' className='img-fluid p-4'/>
          <h5 className='d-flex align-items-center text-center'> RGUKT-NUZVID <br/>DEPARTMENT OF IT</h5>
        </div>
      </div> */}


      {/* Carousel in home page */}
      <section className='container mt-5 mb-5 center'>
        {/* <h1><b>Complaint Panel</b></h1> */}
      </section>


    </div>
    
  )
}

export default Home