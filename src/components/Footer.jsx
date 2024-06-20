import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5 shadow" style={{ width: "100%", height: "300px"}}>
        <div className="footer d-flex justify-content-evenly w-100">
            <div style={{width:'300px'}} className="website">
                <h4 className='fw-bolder text-light'>
                <i class="fa-brands fa-docker"></i>Project Fair
                </h4>
                <h6>
                    Designed and built with all the love in the world by the Luminar team with the help of our contributors.
                </h6>
                <h6>Code licensed ASR, docs CC BY 3.0</h6>
                <p>Currently v1.0.0</p> 
            </div>



        <div className="links d-flex flex-column">
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
            <Link to={'/login'} style={{textDecoration:'none',color:'white'}}>Login</Link>
            <Link to={'/register'} style={{textDecoration:'none',color:'white'}}>Register</Link>
        </div>


        <div className="guides d-flex flex-column">
            <h4>Guides</h4>
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
            <Link to={'https://rect-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
            <Link to={'https://rect-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>Routing</Link>

        </div>
        
        

        <div className="contact">
            <h4> Contact Us </h4>
            <div className="sub d-flex mt-3">
                <input type="text" className="form-control" placeholder="Enter your email"/>
                <button className='btn btn-warning ms-2'><i className="fa-solid fa-arrow-right fa-beat "></i></button>
            </div>
            <div className="icons mt-3 d-flex justify-content-between fs-5 ">
                <Link to ={'https://getbootstrap.com/'}style={{textDecoration:'none',color:'white'}}> <i class="fa-brands fa-linkedin"></i></Link>
                <Link to ={'https://react-bootstrap.github.io/'}style={{textDecoration:'none',color:'white'}}> <i className="fa-brands fa-twitter"></i></Link>
                <Link to ={'https://react-bootstrap.github.io/'}style={{textDecoration:'none',color:'white'}}> <i class="fa-brands fa-facebook"></i></Link>
                <Link to ={'https://react-bootstrap.github.io/'}style={{textDecoration:'none',color:'white'}}> <i class="fa-solid fa-envelope"></i></Link>
                <Link to ={'https://react-bootstrap.github.io/'}style={{textDecoration:'none',color:'white'}}> <i class="fa-brands fa-tiktok"></i></Link>
                <Link to= {'https:react-bootstrap.github.io/'}
                style={{textDecoration:'none',color:'white'}}>
                <i class="fa-brands fa-github"></i></Link>
            </div>
        </div>
    </div>

    <p>Copyright © 2024 ASR Store. Built with React.</p>
    </div>

    )
}

export default Footer