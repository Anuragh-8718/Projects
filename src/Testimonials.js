import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Testimonials() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4"></h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            <h3 style={{color:'brown'}}><b>Customer's Feedback</b></h3>
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam. */}
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://st4.depositphotos.com/1842549/21131/i/450/depositphotos_211315664-stock-photo-customer-reviews-icon-customer-reviews.jpg"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3 text-center">  </h5>
      
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            I would personally recommend this restaurant for good food time.
             

            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur. */}
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fas
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://thumbs.dreamstime.com/b/customer-review-button-customer-review-web-button-computer-generated-illustration-isolated-white-background-121917181.jpg"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            This restaurant is a great choice with good quality and ambiance 
             
            {/* Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid commodi. */}
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.w5S-Gy81-I1-sc_MM2O7TAHaH6&pid=Api&P=0&h=180"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
            </div>
         
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            An Excellent buff hotel with best range of prices and various dishes
           
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}