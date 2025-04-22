import React from "react";
import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import image3 from'./Components/image3.png';
 import './Certification.css';


const Certification = () => {
    return ( 
          <div className="check">
        <Container>
            
        <Row>
            <Col>
            <img src={image3} alt="" className="image3"/>
            </Col>

            <Col >
            <h3 className="certify"><b> Make Academy badges & certifications </b></h3>
            <h4 className="certify"><b> Celebrate your achievements! </b></h4>
            <h6 className="certify">You deserve to be rewarded for your hardwork 
            Make badges and certifications are designed for you to recognize your skills and knowledge.Celebration is always better when shared with others.Why not share your achievements with your friends and colleagues.</h6>
            
            </Col>
        </Row>
        
        </Container>
        </div>
     );
}
 
export default Certification;