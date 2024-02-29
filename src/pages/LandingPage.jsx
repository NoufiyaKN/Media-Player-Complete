import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {

  const navigate = useNavigate()

  const handleNavigate=()=>{
    // Navigate to home page
    navigate('/home')
  }
  return (
    <>
      <div className='container '>
        <div className="header row align-items-center mt-5">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media <br />Player</span></h3>
            <p style={{textAlign : 'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit corrupti nemo ipsum sapiente! Architecto velit voluptas id ex voluptatibus magnam quisquam ad fuga eaque,!</p>
            <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" style={{filter: 'brightness(50%)'}} alt="" />
          </div>
        </div>
        <div className="features mt-5">
          <h3 className='text-center'>Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
            <Card>
              <Card.Img style={{height:'300px'}} variant="top" src="https://lordicon.com/icons/wired/flat/40-gears-settings-double.gif" />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text style={{height: '75px'}}>
                  User can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card>
              <Card.Img style={{height:'300px'}} variant="top" src="https://cdn.dribbble.com/users/793057/screenshots/4220268/music_visualisation.gif" />
              <Card.Body>
                <Card.Title>Categorize Videos</Card.Title>
                <Card.Text style={{height: '75px'}}>
                  User can categorize the videos according to their preferences using drag and drop features.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card>
              <Card.Img style={{height:'300px'}} variant="top" src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text style={{height: '75px'}}>
                  User are able to see the history of watched videos.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
          </div>
        </div>
        <div className="video row border p-5 mt-5 rounded ">
          <div className="col-lg-6">
            <h3 className='text-warning'>Simple, Fast and Powerful</h3>
            <p style={{textAlign : 'justify'}}><span className='fs-4'>Play Everything : </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, exercitationem doloribus, eius eveniet at delectus provident iure et sit quaerat nemo consectetur ullam omnis dolores odit dolor!</p>
            <p style={{textAlign : 'justify'}}><span className='fs-4'>Categorize Videos : </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, exercitationem doloribus, eius eveniet at delectus provident iure et sit quaerat nemo consectetur ullam omnis dolores odit dolor!</p>
            <p style={{textAlign : 'justify'}}><span className='fs-4'>Watch History : </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, exercitationem doloribus, eius eveniet at delectus provident iure et sit quaerat nemo consectetur ullam omnis dolores odit dolor!</p>
          </div>
          <div className="col-lg-6">
          <iframe width="700" height="366" src="https://www.youtube.com/embed/ZdMZ40GSVmc" title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default LandingPage