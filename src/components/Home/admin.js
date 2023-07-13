import React, { useContext, useState } from 'react'
import Footer from '../Footer/Footer'
import AdminHome from './AdminHome'
import Users from './Users'
import Complaints from './complaints'
import AdminNav from './TechAdminNav'
import { Route,BrowserRouter as Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AdminComplaints from './AdminComplaints'
import { baseUrl } from '../../shared/baseUrl'
import Context from '../Context'
import { useEffect } from 'react'
import Home from './Home'
import MainAdminNav from './MainAdminNav'
import InfraAdminNav from './InfraAdminNav'
import InfraComplaints from './InfraComplaints'
import IComplaints from './I_complaints'
import CivilAdminNav from './CivilAdminNav'
import CComplaints from './C_Complaints'
import TechAdminNav from './TechAdminNav'
import TComplaints from './T_complaints'
function Admin (){
  const location=useLocation()
  const navigate=useNavigate()
  // const val=null
  // const id=null
  // const id=null
  // const floor=null
  // const room=null
  // const block=null
  // const password=null
  // <userContext.Consumer>
  console.log(location.state)
  // navigate("/")
  // alert(location.state)
  if(location.state===null){
    window.location.href='/'
  
    }
  
  const id=location.state.id.userId
  const floor=location.state.floor.floor
  const room=location.state.room.room
  const block=location.state.block.block
  const password=location.state.password.password
 
  // const id=data.id.userId
  // const   floor=data.floor.floor
  // const  room=data.room.room
  // const  block=data.block.block
  //  const password=data.password.password
  // const locationAssign=()=>{
 
  // }
//  {
//   (location.state.id.userId==null)?(
//     contextAssign()
//   )
//   :(
//     locationAssign()
//   )
//  }
  
  // fetch(baseUrl+"login/1")
  // .then(response=>response.json())
  // .then(data=>{
  //   setVal(data.value.value)
  // })
  // .catch(error=>{
  //   console.log("error")
  // })
  if (id === 'admin' && password === '1234') {
    return (
      <div>
        <MainAdminNav id={id} floor={floor} room={room} block={block} password={password} />
        <AdminHome />
        <AdminComplaints id={id} floor={floor} room={room} block={block} password={password}/>
        <Footer/>
      </div>
    );
  }
  else if (id==="infra" && password==="1234"){
    return(
      <div>
      <InfraAdminNav id={id} floor={floor} room={room} block={block} password={password} />
      <AdminHome />
      <IComplaints id={id} floor={floor} room={room} block={block} password={password}/>
   
      </div>
    )
  } 
  else if(id==="civil" && password==="1234"){
    return(
      <div>
        <CivilAdminNav id={id} floor={floor} room={room} block={block} password={password} />
        <AdminHome />
        <CComplaints id={id} floor={floor} room={room} block={block} password={password}/>
     
        <Footer/>
      </div>
    )
  }
  else if(id==="tech" && password==="1234"){
    return(
      <div>
        <TechAdminNav id={id} floor={floor} room={room} block={block} password={password} />
        <AdminHome />
        <TComplaints id={id} floor={floor} room={room} block={block} password={password}/>
        <Footer />

      </div>
    )
  }
  else {
    return (
      <div>
        <Navbar id={id} floor={floor} room={room} block={block} password={password}/>
        <Home />
        <Complaints id={id} floor={floor} room={room} block={block} password={password} />
        <Footer />
      </div>
    );
  }
}


export default Admin