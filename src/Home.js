import React, { useEffect,useState }from "react";
import { SiRoadmapdotsh } from "react-icons/si";
import './Home.css';
import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import image1 from './Components/image1.png';
 import { MdBookmarkAdd } from "react-icons/md";
 import logo1 from './Components/logo1.png';
 import logo2 from './Components/logo2.png';
 import logo3 from './Components/logo3.png';
 import logo4 from './Components/logo4.png';
 import logo5 from './Components/logo5.png';
 import Modal from 'react-bootstrap/Modal';
 import AOS from 'aos';
//  import React, { useEffect } from 'react';
 import 'aos/dist/aos.css';
 import Button from 'react-bootstrap/Button';


const Home = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);
    return (
        <div>
       <Container>
        <Row>
            <Col>
            
             <img src={image1} alt="" className="image1" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200"></img> 
             
            </Col>
            <Col>
            <h1 className="header" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"> HUNDREDS OF FLAVOURS UNDER ONE ROOF!</h1>
            <h5 className="para1" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">Good food basically that we have in our plate is a result of immense amount of hardwork that is put at various stages... <br/> <br/> <span style={{color:'brown' , fontSize:'23px'}}> Bite into bliss, Enhance your taste buds!!! </span></h5> <br/>
            
            <Button  style={{marginRight:'26rem' , fontSize:'17px',color:'whitesmoke' , backgroundColor:'black',borderStyle:'none'}} onClick={handleShow}>
        <b> RESERVATION</b>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>Name of Person</label>
            <br/>
            <input style={{width:'450px'}}></input><br/>
            <label>Number of Persons</label> <br/>
            <input style={{width:'450px'}} ></input>
            <br/>
            <label>Table Number</label> <br/>
            <input type="number" style={{width:'450px'}}></input>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Reserve
          </Button>
        </Modal.Footer>
        </Modal>
            <br/> <br/> <br/>
            {/* <h3 className="header1">TRUSTED BY</h3><br/>
            <img src={logo1} alt='' className="logo1"></img>
            <img src={logo2} alt='' className="logo1"></img>
            <img src={logo3} alt='' className="logo3"></img>
            <img src={logo4} alt='' className="logo4"></img>
            <img src={logo5} alt='' className="logo5"></img> */}
            </Col>
        </Row>
       </Container> 
       {/* <h4 className="header2"><SiRoadmapdotsh />  WEB DEVELOPMENT ROADMAP!</h4> */}
       </div>
      );
}
 
export default Home;