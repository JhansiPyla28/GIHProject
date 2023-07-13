import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <section className="footer text-light" id='footer'>
  <div className="container footer text-light ">
      <div className="row">
          <div className="col-lg-5">
              
              <ul>
              <h4>About Us</h4>
                  <p>RGUKT NUZVID</p>
              </ul>
          </div>
          <div className="col-lg-2">
              <ul>
              <h4>Usefull Links</h4>
              <li><a href="#">RGUKT WEB</a></li>
                  <li><a href="#">SMS</a></li>
                  <li><a href="">Intranet Nuzvid</a> </li>
              </ul>
          </div>
          <div className="col-lg-2">
              <ul>
              <h4>Our Services</h4>
                  <li><a href="">Home</a></li>
                  <li><a href="">Complaint Form</a></li>
              </ul>
          </div>
          <div className="col-lg-3">
              <ul>
              <h4>CONTACT US</h4>
                  <li>RGUKT NUZVID</li>
                  <li><a href="" class="href"><i class="bi bi-envelope-paper-fill text-light"></i> jhansipyla991@gmail.com</a></li>
                  <li><a href=""><i class="bi bi-telephone-fill text-dark"></i>9381976848</a></li>
                  <li><a href=""><i class="bi bi-telephone-fill text-light"></i>8333028342</a></li>

              </ul>
          </div>
      </div>
      <div className="row justify-content-center pt-5">             
                <div className="col-auto">
                    <p>© Copyright 2023 Jhansi Pyla</p>
                </div>
            </div>
  </div>
</section> 
  )
}

export default Footer