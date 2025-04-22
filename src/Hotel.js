


import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './Components/logo.png';
import './Landingnav.css';
import Home from './Home';
import Slider from './Slider';
import Steps from './Steps';
import Footer from './Footer';
import Testimonials from './Testimonials';
import { FaArrowRightToBracket } from "react-icons/fa6";

function OffCanvasExample({ title, customerLabel, itemLabel, priceLabel, QuantityLabel, totalLabel, buttonLabel }) {
  const [show, setShow] = useState(false);
  const [customer, setCustomer] = useState('');
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState('');
  const printRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCalculateTotal = () => {
    const calculatedTotal = parseFloat(price) * parseInt(quantity, 10);
    setTotal(calculatedTotal.toFixed(2));
  };

  const handleReset = () => {
    setCustomer('');
    setItem('');
    setPrice('');
    setQuantity('');
    setTotal('');
  };

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow} style={{ marginLeft: '20px' }}>
        {buttonLabel}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ textAlign: 'center', fontSize: '27px' }}>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <label><b>{customerLabel}</b></label>
            <br />
            <input
              className='mt-2'
              style={{ width: '340px', borderRadius: '3px' }}
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div>
            <label><b>{itemLabel}</b></label>
            <br />
            <input
              className='mt-2'
              style={{ width: '340px', borderRadius: '3px' }}
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <div>
            <label><b>{priceLabel}</b></label>
            <br />
            <input
              className='mt-2'
              style={{ width: '340px', borderRadius: '3px' }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type='number'
            />
          </div>
          <div>
            <label><b>{QuantityLabel}</b></label>
            <br />
            <input
              className='mt-2'
              style={{ width: '340px', borderRadius: '3px' }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type='number'
            />
          </div>
          <div>
            <label><b>{totalLabel}</b></label>
            <br />
            <input
              className='mt-2'
              style={{ width: '340px', borderRadius: '3px' }}
              value={total}
              readOnly
            />
          </div>

          <div className='d-flex justify-content-between'>
            <Button variant="primary" className='mt-3' onClick={handleCalculateTotal}>Submit</Button>
            <Button variant="secondary" className='mt-3' style={{marginRight:'12rem'}} onClick={handleReset}>Cancel</Button>
          </div>
          <br/>
          <div >
            <h4><b>Pay Here:</b></h4>
          <img src='https://play-lh.googleusercontent.com/ufwUy4SGVTqCs8fcp6Ajxfpae0bNImN1Rq2cXUjWI7jlmNMCsXgQE5C3yUEzBu5Gadkz' style={{width:'10vw',height:'18vh'}}></img> <br/><br/></div>
          <Button variant="success" className='mt-3' onClick={handlePrint}>Bill <FaArrowRightToBracket /></Button>

          <div ref={printRef} style={{ display: 'none' }}>
            <h2>Invoice</h2>
            <p><b>Customer Name:</b> {customer}</p>
            <p><b>Item Name:</b> {item}</p>
            <p><b>Price:</b> {price}</p>
            <p><b>Quantity:</b> {quantity}</p>
            <p><b>Total Amount:</b> {total}</p>
          </div>
          
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Hotel() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className='navlogo' alt='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="headings">
              <Button href="#home" variant="danger" style={{ marginLeft: '45rem' }}>Home</Button>
              <Button href="#home" variant="danger" style={{ marginLeft: '17px' }}>Contact Us</Button>
              <OffCanvasExample
                title="Billing"
                customerLabel="Customer Name:"
                itemLabel="Name of Item:"
                priceLabel="Price of Item:"
                QuantityLabel="Quantity of Item:"
                totalLabel="Total Amount:"
                buttonLabel="Billing Here"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Home/>
      <Slider/>

      <h2 style={{marginTop:'70px', color:'black',fontWeight:'bold'}}> Our Services!</h2>
      <Steps/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default Hotel;
