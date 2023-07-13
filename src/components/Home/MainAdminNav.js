import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'
const MainAdminNav = ({id, floor, block, room, password}) => {
  console.log(password);
  return (
    <>
   
    <nav className="navbar navbar-expand-sm ">
      <div className="container-fluid">
       
          <img src='/logo.png' width="50" height="50"/>
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav'>
            {/* <li className="nav-item"><NavLink to='/Main_Home' className='nav-link' state={{ id:{id}, floor:{floor}, block:{block}, room:{room}, password:{password} }}>Home</NavLink> </li> */}
            <li className="nav-item"><NavLink to='/users' className='nav-link' state={{ id:{id}, floor:{floor}, block:{block}, room:{room},password:{password}  }}>Users</NavLink> </li>
            <li className="nav-item"><NavLink to='/tech-complaints' className='nav-link'state={{ id:{id}, floor:{floor}, block:{block}, room:{room},password:{password}  }}>Technical Complaints</NavLink> </li>
            <li className="nav-item"><NavLink to='/infra-complaints' className='nav-link'state={{ id:{id}, floor:{floor}, block:{block}, room:{room},password:{password}  }}>Infra Complaints</NavLink> </li>
            <li className="nav-item"><NavLink to='/civil-complaints' className='nav-link'state={{ id:{id}, floor:{floor}, block:{block}, room:{room},password:{password}  }}>Civil Complaints</NavLink> </li>

            {/* <li className="nav-item"><a href='#footer' className='nav-link'> Contact </a></li> */}
          </ul>
          <li className="btn btn-light" type="submit"><Link to='/' className='nav-link text-dark'>LogOut</Link></li>
        </div>
      </div>
    </nav>
    </>
  )
}

export default MainAdminNav