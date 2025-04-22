import React from "react";
import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
import './Footer.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF  } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare , FaHeart  } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { ImMail4 } from "react-icons/im";
import { FaSquarePhone } from "react-icons/fa6";
import { AiTwotoneHome } from "react-icons/ai";

const Footer = () => {
    return ( 
        <div className="footer">
            <Container>
            <Row    className="partner d-flex gap-5">
                <Col lg={2} md={3} sm={12}>
               <h5 className="high">SERVICES </h5>
               <li> Restaurant  </li>
               <li> Banquet </li>
               <li>Marraige Hall Booking </li>
               <li>Home Design</li>
               <li>Staying </li>
               </Col> 
            
            <Col lg={2} md={3} sm={12}>
               <h5 className="high"> OPENING HOURS   </h5>
               <li>Banquet Timing:8AM-11PM  </li>
               <li>Takeaway: 10:30AM-12PM </li>
               <li> Lodge : Available Any Time</li>
               <li>Hotel Opens:8AM-12PM</li>
             
              
               
               </Col> 
               {/* <Col lg={2} md={3} sm={12}>
               <h5 className="high">Resources </h5>
               <li>Digital DNA </li>
               <li>Bootcamps </li>
               <li>Press </li>
               
               </Col> */}
               <Col lg={2} md={3} sm={12}>
               <h5 className="high">CONTACT US  </h5>
               <li> Tasty Restaurant,Metro Station II  </li>
               <li> Madhapur,Hyderabad  </li>
               <li> 8469034267</li>
               <li>  restauranttasty@gmail.com</li>
               
               </Col>
                <Col lg={2} md={3} sm={12}>
               <h5 className="high">ABOUT US  </h5>
               <li>About Restaurant</li>
               <li>Food dishes </li>
               <li>Blog </li>
               </Col>
               <Col className="icons">
               <a href="" alt="" className="iconlink"><FaLinkedin  size={45} className="footericon"/></a>
                <a href="" alt="" className="iconlink">< FaFacebookF size={40} className="footericon"/></a>
                <a href="" alt="" className="iconlink">< FaTwitter size={43} className="footericon"/></a>
                <a href="" alt="" className="iconlink">< FaInstagramSquare size={43} className="footericon"/></a>
               
               </Col>
               
         
               </Row>
               
            </Container>
            <div className="last">
            <h6 className="copy">Copyright <MdCopyright size={24} /> 2024.Restaurant  | Terms of Use | Privacy Policy |</h6>
            <h5 className="made">Made with<FaHeart size={20} className="icon1"/></h5>
        </div>
        </div>
     );
}
 
export default Footer;