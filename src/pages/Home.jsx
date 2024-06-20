import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/admin.png'
import Projectcard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 style={{fontSize:'80px'}}><i class="fa-brands fa-docker"></i>Project Fair</h1>
                            <p style={{textAlign:'justify'}}>
                                One Stop Destination for all software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!! 
                            </p>
                            { 
                            sessionStorage.getItem("token")?
                            <Link to="/dashboard" className="btn btn-warning">MANAGE YOUR PROJECTS</Link>
                            :<Link to="/login" className="btn btn-warning">START TO EXPLORE</Link>
                            }
                        </div>
                        <div className="col-lg-6">
                            <img className='img-fluid' src={landingImg} alt="landing" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-5 text-center">
                <h1 className="mb-5">Explore Our Projects</h1>
                <marquee>
                    <div className="d-flex">
                        <div className="me-5">
                            <Projectcard />
                        </div>
                    </div>
                </marquee>
                <button className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS...</button>
            </div>
            <div className="d-flex align-items-center mt-5 flex-column">
                <h1>Our Testimonials</h1>                
                    <div className='d-flex align-items-center justify-content-evenly mt-3 w-100'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                        <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdn-icons-png.freepik.com/512/3001/3001764.png"/> 
                        <span>Max Miller</span>   
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-center">
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div>                             
                            </div>
                        <p>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                        <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"/> 
                        <span>Liam Anderson</span>   
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-center">
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div> 
                                <div className="fa-solid fa-star text-warning"></div>                            
                            </div>
                        <p>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                        <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc3Ls75DPq9b1NqZj-1MW1lbaB-wccGOVpw&s"/> 
                        <span>Nina Halse</span>   
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-center">
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div>                             
                            </div>
                        <p>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                        <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GkZ7KEyX_UsB7Rpy_LIsF-JiJwqBk0m11nAYM8FWnLaACRFah66TfoLQoR6vE9G0P1c&usqp=CAU"/> 
                        <span>Santra Richard</span>   
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-center">
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div>
                                <div className="fa-solid fa-star text-warning"></div>                             
                            </div>
                        <p>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </div>
            </div>
            
        </>
    )
}

export default Home