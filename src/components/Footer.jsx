import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height : '300px'}} className='container mt-5 w-100'>
        <div className="footer-content d-flex justify-content-between">
            <div style={{width : '400px'}} className="media">
                <h5 className='d-flex'><i style={{height : '25px'}} className="fa-solid fa-music me-3"></i>Media Player</h5>
                <p style={{textAlign : 'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere dolores sed explicabo maiores perspiciatis minus, vitae et.</p>
                <span>Code Licensed MIT, docs CC BY 3.0</span><br />
                <span>Currently v5.3.2</span>
            </div>
            <div className="links d-flex flex-column">
                <h5>Links</h5>
                <Link to={'/'} style={{textDecoration : 'none',color : 'white'}}>Landing Page</Link>
                <Link to={'/home'} style={{textDecoration : 'none',color : 'white'}}>Home Page</Link>
                <Link to={'/watch'} style={{textDecoration : 'none',color : 'white'}}>Watch Page</Link>
            </div>
            <div className="guides d-flex flex-column">
                <h5>Guides</h5>
                <a href="https://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}>React JS</a>
                <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration: 'none',color: 'white'}}>React Routing</a>
                <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration: 'none',color: 'white'}}>React Bootstrap</a>
            </div>
            <div className="contact">
                <h5>Contact Us</h5>
                <div className='d-flex'>
                    <input type="text" className='form-control me-1' placeholder='Email Id Please' />
                    <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='icons d-flex justify-content-between mt-3'>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-twitter"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-instagram"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-facebook"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-linkedin"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-github"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-solid fa-phone"></i></a>
                </div>
            </div>
        </div>
        <p className='text-center mt-5'>Copyright &copy; 2024 Media Player. Build with React.</p>
    </div>
  )
}

export default Footer