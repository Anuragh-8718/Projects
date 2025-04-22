// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './Landingnav.css';
// import { FaArrowRightFromBracket } from "react-icons/fa6";
// import { MDBBtn } from 'mdb-react-ui-kit';
// import { FaBookOpenReader } from "react-icons/fa6";
// import logo from './Components/logo.png';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';



//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
// function Landingnav() {
//   return (
//     <>
//     <div>
//     <Navbar expand="lg"  className="">
//       <Container>
//           <Navbar.Brand href="#home"> <img src={logo} className='navlogo' alt=''></img>
//   </Navbar.Brand> 
//         {/* <h1 className="position-absolute top-0 start-0 logotext text-blue">MakeNow</h1> */}
//         {/* <p className='line'> UNLOCK YOUR POTENTIAL WITH MAKENOW ACADEMY </p> */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="headings">
          
       
//               <div>
//               <Button variant="primary" onClick={handleShow} className="me-2">
//         {name}
//       </Button>
//       <Offcanvas show={show} onHide={handleClose} {...props}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc.
//         </Offcanvas.Body>
//       </Offcanvas>
//       </div>
    
//                <a href='#'>
//               <button className='button1'>Billing Here</button> </a> 
          
//           </Nav>
//         </Navbar.Collapse>
//        </Container>
      
//       </Navbar>
//      {/* <p style={{color:'blue', fontSize: '17px', fontWeight:'bold'}}> UNLOCK YOUR POTENTIAL WITH MAKENOW ACADEMY </p>  */}
//   </div>
//   </>
    
    
//   );
// }

// export default Landingnav;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Landingnav.css';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { MDBBtn } from 'mdb-react-ui-kit';
import { FaBookOpenReader } from "react-icons/fa6";
import logo from './Components/logo.png';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);
  return (
    <>
    
  
      <Button variant="secondary" onClick={handleShow} className="button1">
        Billing Here
      </Button> 
      <Offcanvas show={show} onHide={handleClose} {...props} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{textAlign:'center', fontSize:'27px'}}>Billing</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div >
          <label  ><b>Customer Name:</b></label>
          <br/>
          <input className='mt-2' style={{width:'340px', borderRadius:'3px'}}></input>
          </div>
          <div >
          <label  ><b>Name of Item:</b></label>
          <br/>
          <input className='mt-2' style={{width:'340px', borderRadius:'3px'}}></input>
          </div>
          <div >
          <label  ><b>Price of Item:</b></label>
          <br/>
          <input className='mt-2' style={{width:'340px', borderRadius:'3px'}}></input>
          </div>
          <div >
          <label  ><b>GST:</b></label>
          <br/>
          <input className='mt-2' style={{width:'340px', borderRadius:'3px'}}></input>
          </div>
          <div >
          <label  ><b>Taxes:</b></label>
          <br/>
          <input className='mt-2' style={{width:'340px', borderRadius:'3px'}}></input>
          </div>
          <div >
          <label  ><b>Total Amount:</b></label>
          <br/>
          <input className='mt-2' style={{width:'340px', borderRadius:'3px'}}></input>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Landingnav() {
  return (
    <>
      <div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              
              <img src={logo} className='navlogo' alt='logo' />
              
              
              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="headings">
                <OffCanvasExample name="Show Menu" />
                <a href='#'>
                  {/* <button className='button1'>Billing Here</button> */}
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Landingnav;
