import React,{useEffect}from "react";
import './Makenow1.css';
import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import image2 from './Components/image2.png';
 import AOS from 'aos';
 //  import React, { useEffect } from 'react';
  import 'aos/dist/aos.css';


const Makenow1 = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);
    return ( 
        
        <div className="now">
            <Container>
                <Row>
                    <Col lg={6} sm={12}>
                    <div className="left">
                    <h5 className="jobs ">WHAT ARE THE JOBS OF FUTURE</h5>
                    <h2 className="one">One platform for your needs</h2>
                    <h2 className="one">Why Makenow Academy </h2> 
                    <h6 className="makenow">' a platform for aspiring software developers and coders,
                    ,is revolutionizing the software industry with its remarkable business 
                    model of training and guidance.It's increased digitization of process.
                    The scope of coding is unfathomable and everything can be achieved
                    MakeNow with a team of young and talented helps you achieve goals.
                    MakeNow, an innovative and creative learning school is driven towards
                     training professionals in Data Analysis by holding your hand through
                      each and every stage of your professional growth. With its expertise 
                      and professionalism, MakeNow has successfully placed 150+ candidates
                       during there placements with highest job packages and has also trained more than 500
                        students with the help of industry experts. So, MakeNow with a team of young and
                         talented professionals helps you achieve the desired results in the same direction.
                         Make Now gives you extensive training not only to become a developer but also teaches
                          you the most wanted and highest-paid technologies in the market. </h6>

                        
                   
                 </div>
                    </Col>
                    

                    <Col lg={6} sm={12}>
                    <img className='image2' src={image2} alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200"/>
                    </Col>
                </Row>

                <Row id="driven">
                    <Col lg={3} md={6} sm={12} className="data">
                    <h2 className="text-start " id="design">Data-Driven Curriculum Design</h2>
                    <h6 className="text-start">Meet goals Recruitment,upskilling,<br/> experience,brand.</h6>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="real">
                    <h2 className="text-start"  id="design">Real-Time Talent Analytics</h2>
                    <h6 className="text-start">Measure skills trends in the market and amongst your team or talent.</h6>

                    </Col> 
                    </Row>

                    
                <Row className="mt-5 " id="routes">
                    <Col lg={3} md={6} sm={12} className="personal">
                    <h2 className="text-start"  id="design">Personalized Learning Routes</h2>
                    <h6 className="text-start">Increase engagement with Personalized training</h6>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="reach">
                    <h2 className="text-start"  id="design">100% job Placement Rates</h2>
                    <h6 className="text-start">Reach 100% employment rates with our matching technology</h6>

                    </Col>
                    <Col lg={3} md={6} sm={12} className="trends">
                    <h2 className="text-start"  id="design">Trends Forecasting and Modeling </h2>
                    <h6 className="text-start">Understand change will be the norm. Anticipate it.</h6>

                    </Col>
                    <Col lg={3} md={6} sm={12} className="stand">
                    <h2 className="text-start"  id="design">Reskilling and Upskilling </h2>
                    <h6 className="text-start">Stand out and up to date with the 4th Industrial Revolution</h6>

                    </Col>
                    </Row>

                    

            </Container>
            
        </div>
     );
}


 
export default Makenow1;