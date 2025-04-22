
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Slider.css';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

function Slider() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  
  


  return (
    <div>
         <div className="slider-container">
        <h3 className="mb-2 mt-5 text-center ignite" style={{fontSize:'33px',color:'chocolate'}}><b>Categorize Menu Items...</b></h3>
        <p className="mb-4 pb-2 mb-md-5 pb-md-0 text-center justify-text " style={{fontFamily:'sans-serif'}}></p>

      </div>
      <Container>
      <Row>
      <Col>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'35vh'}} src="https://rillfoods.com/wp-content/uploads/2018/06/DSC_0346.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'20px', fontFamily:'sans-serif', color:'brown'}}><b>Soaps and Salads</b></Card.Title>
        <Card.Text>
        
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>
      <Col>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'35vh'}} src="https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/01/best-ever-starters.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'20px', fontFamily:'sans-serif', color:'brown'}}><b>Veg-Kick-Starters</b></Card.Title>
        <Card.Text>
        
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>
        
        <Col>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'35vh'}} src="https://media.architecturaldigest.in/wp-content/uploads/2020/02/vegetarian-thali-mumbai-restautants_5.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'20px', fontFamily:'sans-serif', color:'brown'}}><b>Vegetarian Main course</b></Card.Title>
        <Card.Text>
        
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>

    <Col>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'35vh'}} src="https://c.ndtvimg.com/2020-06/md20qlqo_curry_625x300_20_June_20.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'18px', fontFamily:'sans-serif', color:'brown'}}><b>Non-Vegetarian Main course</b></Card.Title>
        <Card.Text>
        
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>

    <Col className='mt-4'>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'35vh'}} src="https://www.giggsmeat.com/wp-content/uploads/2020/10/JKDeR63pap.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'18px', fontFamily:'sans-serif', color:'brown'}}><b>Non-Vegetarian Kick-Starters</b></Card.Title>
        <Card.Text>
        
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>
    <Col  className='mt-4' >
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'35vh'}} src="https://static.toiimg.com/photo/msid-75912591/75912591.cms" />
      <Card.Body>
        <Card.Title style={{fontSize:'20px', fontFamily:'sans-serif', color:'brown'}}><b>Veg & Non-veg Biryani</b></Card.Title>
        <Card.Text>
        
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>

    <Col   className='mt-4'>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'35vh'}} src="https://tse4.mm.bing.net/th?id=OIP.MkmdcW0GA4qxZ8f_hKzXWQHaEo&pid=Api&P=0&h=180" />
      <Card.Body>
        <Card.Title style={{fontSize:'20px', fontFamily:'sans-serif', color:'brown'}}><b>Beverages</b></Card.Title>
        <Card.Text>
        
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>
    <Col  className='mt-4' >
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'35vh'}} src="https://resize.img.allw.mn/thumbs/nq/tu/knt5l6y35e9e60957ac91984701085_1080x1080.jpg?width=1200&height=1200" />
      <Card.Body>
        <Card.Title style={{fontSize:'20px', fontFamily:'sans-serif', color:'brown'}}><b>Deserts</b></Card.Title>
        <Card.Text>
        
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>
    
    
    
    
    </Row>
  

   
    <h2 className="mb-2 mt-5 text-center ignite" style={{fontSize:'35px',color:'chocolate'}}><b>Order Now...</b></h2>
  
    <Row className='mt-5'>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{height:'35vh'}}src="https://wallpapercave.com/wp/wp3724333.jpg" />
      <Card.Body>
       
        <div className='d-flex '>
        <Button variant="danger" onClick={handleShow}>
        Order it
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order it</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
  <label><b>Name of Item</b></label><br />
  <input style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Price of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Quantity of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Filters</b></label><br />
  <select style={{ width: '400px', borderRadius: '3px' }}>
    <option value="option1">Veg</option>
    <option value="option2">Non Veg</option>
    <option value="option3">Spicy</option>
    <option value="option4">mild Spicy</option>
  </select>
</div>

          
          
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        <Button variant="secondary" style={{marginLeft:'30px'}}>460.00</Button>
        </div>
      </Card.Body>
    </Card>
</Col>
<Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{height:'35vh'}}src="https://foodnerdy.com/blog/wp-content/uploads/2021/05/2-1024x1024.jpg" />
      <Card.Body>
       
        <div className='d-flex '>
        <Button variant="danger" onClick={handleShow}>
        Order it
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order it</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
  <label><b>Name of Item</b></label><br />
  <input style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Price of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Quantity of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Filters</b></label><br />
  <select style={{ width: '400px', borderRadius: '3px' }}>
  <option value="option1">Veg</option>
    <option value="option2">Non Veg</option>
    <option value="option3">Spicy</option>
    <option value="option4">mild Spicy</option>
  </select>
</div>

          
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        
        <Button variant="secondary" style={{marginLeft:'30px'}}>320.00</Button>
        </div>
      </Card.Body>
    </Card>
</Col>

<Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{height:'35vh'}}src="https://tse2.mm.bing.net/th?id=OIP.KFdw8aSDf-PMswwzpZkyvgHaEi&pid=Api&P=0&h=180" />
      <Card.Body>
       
        <div className='d-flex '>
        <Button variant="danger" onClick={handleShow}>
        Order it
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order it</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
  <label><b>Name of Item</b></label><br />
  <input style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Price of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Quantity of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Filters</b></label><br />
  <select style={{ width: '400px', borderRadius: '3px' }}>
  <option value="option1">Veg</option>
    <option value="option2">Non Veg</option>
    <option value="option3">Spicy</option>
    <option value="option4">mild Spicy</option>
  </select>
</div>

          
          
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        <Button variant="secondary" style={{marginLeft:'30px'}}>300.00</Button>
        </div>
      </Card.Body>
    </Card>
</Col>

<Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{height:'35vh'}}src="https://i.pinimg.com/originals/f2/03/5d/f2035db8632c1be4e7c0fa8b0e545055.jpg" />
      <Card.Body>
       
        <div className='d-flex '>
        <Button variant="danger" onClick={handleShow}>
        Order it
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order it</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
  <label><b>Name of Item</b></label><br />
  <input style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Price of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Quantity of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Filters</b></label><br />
  <select style={{ width: '400px', borderRadius: '3px' }}>
  <option value="option1">Veg</option>
    <option value="option2">Non Veg</option>
    <option value="option3">Spicy</option>
    <option value="option4">mild Spicy</option>
  </select>
</div>

          
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        <Button variant="secondary" style={{marginLeft:'30px'}}>560.00</Button>
        </div>
      </Card.Body>
    </Card>
</Col>
<Col className='mt-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{height:'35vh'}}src="https://bloximages.newyork1.vip.townnews.com/elpasoinc.com/content/tncms/assets/v3/editorial/4/2b/42b606fb-ed02-5b9a-9302-6716ad7d452f/6661f9ccc6759.image.jpg?resize=1280%2C720" />
      <Card.Body>
       
        <div className='d-flex '>
        <Button variant="danger" onClick={handleShow}>
        Order it
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order it</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
  <label><b>Name of Item</b></label><br />
  <input style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Price of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Quantity of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Filters</b></label><br />
  <select style={{ width: '400px', borderRadius: '3px' }}>
  <option value="option1">Veg</option>
    <option value="option2">Non Veg</option>
    <option value="option3">Spicy</option>
    <option value="option4">mild Spicy</option>
  </select>
</div>

          
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        <Button variant="secondary" style={{marginLeft:'30px'}}>640.00</Button>
        </div>
      </Card.Body>
    </Card>
</Col>

<Col className='mt-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{height:'35vh'}}src="https://www.eligasht.co.uk/Blog/wp-content/uploads/2019/05/foods-to-eat-in-Italy-Done.jpg" />
      <Card.Body>
       
        <div className='d-flex '>
        <Button variant="danger" onClick={handleShow}>
        Order it
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order it</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
  <label><b>Name of Item</b></label><br />
  <input style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Price of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Quantity of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Filters</b></label><br />
  <select style={{ width: '400px', borderRadius: '3px' }}>
  <option value="option1">Veg</option>
    <option value="option2">Non Veg</option>
    <option value="option3">Spicy</option>
    <option value="option4">mild Spicy</option>
  </select>
</div>

         
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        <Button variant="secondary" style={{marginLeft:'30px'}}>660.00</Button>
        </div>
      </Card.Body>
    </Card>
</Col>
<Col className='mt-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{height:'35vh'}}src="https://tse2.mm.bing.net/th?id=OIP.w8wXwfNYF-qJmpBcmrYj1QHaE7&pid=Api&P=0&h=180" />
      <Card.Body>
       
        <div className='d-flex '>
        <Button variant="danger" onClick={handleShow}>
        Order it
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order it</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
  <label><b>Name of Item</b></label><br />
  <input style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Price of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Quantity of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Filters</b></label><br />
  <select style={{ width: '400px', borderRadius: '3px' }}>
  <option value="option1">Veg</option>
    <option value="option2">Non Veg</option>
    <option value="option3">Spicy</option>
    <option value="option4">mild Spicy</option>
  </select>
</div>

          
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        <Button variant="secondary" style={{marginLeft:'30px'}}>700.00</Button>
        </div>
      </Card.Body>
    </Card>
</Col>
<Col className='mt-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{height:'35vh'}}src="https://i.pinimg.com/originals/f0/be/47/f0be4753cd6526679cd5b7910b767ddf.jpg" />
      <Card.Body>
       
        <div className='d-flex '>
        <Button variant="danger" onClick={handleShow}>
        Order it
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order it</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
  <label><b>Name of Item</b></label><br />
  <input style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Price of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Quantity of Item</b></label><br />
  <input type='number' style={{ width: '400px', borderRadius: '3px' }}></input>
</div>
<div>
  <label><b>Filters</b></label><br />
  <select style={{ width: '400px', borderRadius: '3px' }}>
  <option value="option1">Veg</option>
    <option value="option2">Non Veg</option>
    <option value="option3">Spicy</option>
    <option value="option4">mild Spicy</option>
  </select>
</div>

          
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        <Button variant="secondary" style={{marginLeft:'30px'}}>770.00</Button>
        </div>
      </Card.Body>
    </Card>
</Col>





    </Row>
    </Container>
    </div>
    
    
  );
}

export default Slider;
